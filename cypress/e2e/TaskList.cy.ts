describe('Task List', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('No Task Message should display', () => {
    cy.contains('No Task added yet!').should('exist')
  })

  it('Should add new task', () => {
    cy.get('input[data-id="task-name-input"]').type('New Task');
    cy.get('button[data-id="task-add-btn"]').click()
    cy.contains('New Task').should('exist')
  })

})