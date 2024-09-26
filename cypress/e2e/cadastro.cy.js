describe('Testes de Cadastro', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('Verifica campos obrigatórios vazios', () => {
        cy.get('button[type="submit"]').click();
        cy.get('#mensagem').should('contain', 'Todos os campos são obrigatórios.');
    });

    it('Verifica senhas diferentes', () => {
        cy.get('#nome').type('João Silva');
        cy.get('#email').type('joao@example.com');
        cy.get('#senha').type('123456');
        cy.get('#confirmarSenha').type('654321');
        cy.get('button[type="submit"]').click();
        cy.get('#mensagem').should('contain', 'As senhas não correspondem.');
    });

    it('Verifica cadastro bem-sucedido', () => {
        cy.get('#nome').type('Maria Souza');
        cy.get('#email').type('maria@example.com');
        cy.get('#senha').type('senha123');
        cy.get('#confirmarSenha').type('senha123');
        cy.get('button[type="submit"]').click();
        cy.get('#mensagem').should('contain', 'Cadastro realizado com sucesso!');
    });
});
