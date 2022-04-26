describe('URL Converter Dashboard', () => {

  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/urls',
      { statusCode: 200,
        body:{
          "urls": [
            {
            "id": 1,
            "long_url": "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
            "short_url": "http://localhost:3001/useshorturl/1",
            "title": "Awesome photo"
            }]
          }
        })
      .visit(`http://localhost:3000`)
    })

  it('Should be able to visit the page and view the existing shorthand URLs', () => {
    cy.get('h1').contains('URL Shortener')
      .get('.url-container').should('be.visible')
      .get('.url-card').eq(0).should('be.visible')
      .get('.url-title').eq(0).contains('Awesome photo')
      .get('.short-url').eq(0).contains('http://localhost:3001/useshorturl/1')
      .get('.long-url').eq(0).contains('Long Url: https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
  });

  it('Should be able to visit the page and view a form and proper inputs', () => {
    cy.get('form').should('be.visible')
      .get('input').eq(0).should('be.visible')
      .get('input').eq(1).should('be.visible')
  });

  it('Should allow the user to fill out the form and reflect the proper inputs', () => {
    cy.get('input').eq(0).type('Test3').should('have.value', 'Test3')
      .get('input').eq(1).type('url entered here').should('have.value', 'url entered here')
  });

  it.only('Should allow the user to submit the form and see the new shortened URL rendered on the page', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
        id:Date.now(),
        long_url: 'url entered here',
        short_url:`http://localhost:3001/useshorturl/${Date.now()}`,
        title: 'Test3'
      } )
      .get('input').eq(0).type('Test3').should('have.value', 'Test3')
      .get('input').eq(1).type('url entered here').should('have.value', 'url entered here')
      .get('.submit-btn').click()
      .get('.url-card').last().should('be.visible')
  });
  });
