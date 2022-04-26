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

  it.only('Should be able to visit the page and view the existing shorthand URLs', () => {
    cy.get('h1').contains('URL Shortener')
  });

  it('Should be able to visit the page and view a form and proper inputs', () => {
  });

  it('Should allow the user to fill out the form and reflect the proper inputs', () => {
  });

  it('Should allow the user to submit the form and see the new shortened URL rendered on the page', () => {
  });
  });
