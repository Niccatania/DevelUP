import { gql } from '@apollo/client';

export const QUERY_USER = gql`
	{
		user {
			_id
   			email
			projects {
				_id
				title
				status
				description
				dateCreated
			}
  		}
	}
`;

export const QUERY_USER_EMAIL = gql`
	{
		user {
			_id
			email
		}
	}
`;

export const QUERY_ALL_SERVICES = gql`
	{
		allServices {
			_id
			description
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