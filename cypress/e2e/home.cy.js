describe('homepage', () => {
    it('has a title', () => {
        cy.visit('https://beta.gouv.fr/')

        cy.findByRole('heading', { level: 1 })
            .should('have.text', 'Construisons ensemble les services publics numériques de demain')
    })
    it('has a searchbar', () => {
        cy.visit('https://beta.gouv.fr/')

        cy.findByRole('searchbox', { name: "Recherche" })
            .type('foo')
    })
})
