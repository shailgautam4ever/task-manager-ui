describe('Task Form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    it('Should show error when trying to add invalid task', () => {
      cy.get('button[data-id="task-add-btn"]').click()
      cy.get('.error-text').should('exist')
    })

    it('Should add new task', () => {
      cy.get('input[data-id="task-name-input"]').type('New Task');
      cy.get('button[data-id="task-add-btn"]').click()
      cy.contains('New Task').should('exist')
    })

    it('task form should reset its values after adding new task', () => {
      cy.get('input[data-id="task-name-input"]').type('New Task');
      cy.get('select[data-id="task-select-input"]').select('high');
      cy.get('button[data-id="task-add-btn"]').click()
      cy.get('input[data-id="task-name-input"]').should('be.empty')
      cy.get('select[data-id="task-select-input"]').should('have.value', 'low')
    })
  })