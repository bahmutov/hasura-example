/// <reference types="cypress" />
it('makes GraphQL call for names', () => {
  cy.request('POST', 'http://localhost:8080/v1/graphql', {
    query: `{
      profile {
        name
      }
    }`
  }).its('body.data').should('deep.equal', {
    profile: [{
      name: 'mike'
    }, {
      name: 'joe'
    }]
  })
})

it('makes GraphQL call for names and ids', () => {
  cy.request('POST', 'http://localhost:8080/v1/graphql', {
    query: `{
      profile {
        name
        id
      }
    }`
  }).its('body.data').should('deep.equal', {
    profile: [{
      name: 'mike',
      id: 1
    }, {
      name: 'joe',
      id: 2
    }]
  })
})
