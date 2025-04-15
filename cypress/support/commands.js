// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('signup', () => {
    // Verificação se o texto principal do website está visível, para garantir que o site foi carregado
    cy.contains('Automation').should('be.visible');

    // Clicar no botão 'Signup / Login'
    cy.contains('Signup / Login').click();

    // Verificar se 'New User Signup!' está visível
    cy.contains('New User Signup!').should('be.visible');

    // Função que acessa o arquivo signup na pasta fixtures
    cy.fixture('signup.json').then((data) => {
        // Inserir os dados do nome e endereço de e-mail
        cy.get(data.elements["name"]).type(data.inputs["name"]);
        cy.get(data.elements["emailaddress"]).type(data.inputs["emailaddress"]);
    });

    // Clicar no botão Signup
    cy.get('[data-qa="signup-button"]').click();

    // Verificar se Enter Account Information está visível
    cy.contains('Enter Account Information').should('be.visible');
});

Cypress.Commands.add('cadastro', () => {
    // Função que acessa o arquivo cadastro na pasta fixtures
    cy.fixture('cadastro.json').then((data) => {
        // Preencher os dados de cadastro do usuario
        cy.get(data.elements["title"]).click();
        cy.get(data.elements["name"]).type(data.inputs["name"]);
        cy.get(data.elements["password"]).type(data.inputs["password"]);
        cy.get(data.elements["days"]).select(data.inputs["days"]);
        cy.get(data.elements["months"]).select(data.inputs["months"]);
        cy.get(data.elements["years"]).select(data.inputs["years"]);
        cy.get(data.elements["newsletter"]).click();
        cy.get(data.elements["offers"]).click();
    });
});

Cypress.Commands.add('endereco', () => {
    // Função que acessa o arquivo endereco na pasta fixtures
    cy.fixture('endereco.json').then((data) => {
        // Preencher os dados de endereco do usuario
        cy.get(data.elements["firstname"]).type(data.inputs["firstname"]);
        cy.get(data.elements["lastname"]).type(data.inputs["lastname"]);
        cy.get(data.elements["company"]).type(data.inputs["company"]);
        cy.get(data.elements["address"]).type(data.inputs["address"]);
        cy.get(data.elements["address2"]).type(data.inputs["address2"]);
        cy.get(data.elements["country"]).select(data.inputs["country"]);
        cy.get(data.elements["state"]).type(data.inputs["state"]);
        cy.get(data.elements["city"]).type(data.inputs["city"]);
        cy.get(data.elements["zipcode"]).type(data.inputs["zipcode"]);
        cy.get(data.elements["mobilenumber"]).type(data.inputs["mobilenumber"]);
    });
});