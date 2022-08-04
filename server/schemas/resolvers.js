// const { AuthenticationError } = require('apollo-server-express');
const { User, Project, Developer } = require('../models');
// const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');




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
    },
    Mutation: {

    }
}

module.exports = resolvers;