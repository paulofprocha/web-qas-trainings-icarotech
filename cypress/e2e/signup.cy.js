describe('Fluxo de criar e deletar usuário', () => {

    beforeEach(() => {
        // Acessar o website a ser testado
        cy.visit('https://automationexercise.com/');
    });

    it('criação e deleção de usuário', () => {
        cy.signup();

        cy.cadastro();

        cy.endereco();

        // Clicar no botão de criação de conta
        cy.get('[data-qa="create-account"]').click();

        // Verificação se account created está visível
        cy.contains('Account Created!').should('be.visible');

        // Clicar no botão continue
        cy.get('[data-qa="continue-button"]').click();

        // Verificação se logged está visível
        cy.contains('Logged in as').should('be.visible');

        // Clicar no botão delete account
        cy.contains('Delete Account').click();

        // Verificação se account deleted está visível
        cy.contains('Account Deleted!').should('be.visible');

        // Clicar no botão continue
        cy.get('[data-qa="continue-button"]').click();
    });

    after(() => {
        // Realizar ações de limpeza ou finalização após a execução de todos os testes
        cy.log('Todos os testes foram concluídos')
      })
})