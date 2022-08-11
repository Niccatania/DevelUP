const { AuthenticationError } = require('apollo-server-express');
const { User, Project, Developer, Service } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');




const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    populate: 'projects'
                });
      
                user.projects.sort((a, b) => b.dateCreated - a.dateCreated);
      
                return user;
            }

            throw new AuthenticationError('Not logged in');
        },
        allUsers: async (parent, args, context) => {
            return await User.find().populate('projects');
        },
        allDevelopers: async (parent, args, context) => {
            return await Developer.find();
        },
        developer: async (parent, { _id }) => {
            return await Developer.findById(_id);
        },
        allProjects: async (parent, args, context) => {
            return await Project.find().populate('services');
        },
        project: async (parent, { _id }) => {
            const project = await Project.findById(_id).populate({
                path : 'services',
                populate : {
                  path : 'developer'
                }
              })
            console.log(project.services.developer);
            console.log(project.totalPrice);
            return project;
        },
        allServices: async (parent, args, context) => {
            return await Service.find().populate('developer');
        },
        service: async (parent, { _id }) => {
            return await Service.findById(_id).populate('developer');
        },
        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
            const project = new Project({ services: args.services });
            const line_items = [];

            const { services } = await project.populate('services');

            for (let i = 0; i < services.length; i++) {
                const service = await stripe.products.create({
                    description: services[i].description
                });

                const price = await stripe.prices.create({
                    service: service.id,
                    unit_amount: services[i].price * 100,
                    currency: 'usd'
                });

                line_items.push({
                    price: price.id,
                    quantity: 1
                });
            }

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${url}/`
            });

            return { session: session.id };
        }
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect email or password');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect email or password');
            }
            const token = signToken(user);
            return { token, user };
        },
        addProject: async (parent, { title, description, userid, serviceIds }, context) => {
            // if (context.user) {
                let services =[]
                for(i=0;i<serviceIds.length;i++){
                    const newserv = await Service.findById(serviceIds[i]).populate('developer');
                    services.push(newserv);
                }
                console.log(services)
                const project = Project.create({ title, description, services: services });



                await User.findByIdAndUpdate(userid, {$push: {projects: project } });

                return project
            // }

            // throw new AuthenticationError('Not logged in');
        },
        addService: async (parent, {description, price, devId}, context) => {
            const dev = await Developer.findById(devId);
            const service = Service.create({description, price, developer: dev });

            return service;
        }
    }
}

module.exports = resolvers;