import { gql } from '@apollo/client';

export const QUERY_USER = gql`
	{
		user {
			email
			projects {
				_id
				title
				description
				status
				services {
					_id
					description
					price
					developer
				}
				dateCreated
			}
		}
	}
`;

export const QUERY_ALL_SERVICES = gql`
	{
		services {
			_id
			description
			price
			developer
		}
	}
`;

export const QUERY_ALL_DEVS = gql`
	{
		allDevelopers {
			_id
			name
			image
			github
			portfolio
		}
	}
`;

export const QUERY_CHECKOUT = gql`
	query getCheckout($services: [ID]!) {
		checkout(services: $services) {
			session
		}
	}
`;