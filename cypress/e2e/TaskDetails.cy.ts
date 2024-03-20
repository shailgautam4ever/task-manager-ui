describe('Task Details', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    it('Should add new task', () => {
      cy.get('input[data-id="task-name-input"]').type('New Task');
      cy.get('button[data-id="task-add-btn"]').click()
      cy.contains('New Task').should('exist')
    })

    it('task item should have a edit and delete button', () => {
      cy.get('input[data-id="task-name-input"]').type('New Task');
      cy.get('button[data-id="task-add-btn"]').click()
      cy.contains('New Task').should('exist')
      cy.get('.action-container').children().should('have.length', 2)
    })

    it('task should be remove when clicking on delete button', () => {
      cy.get('input[data-id="task-name-input"]').type('New Task');
      cy.get('button[data-id="task-add-btn"]').click()
      cy.get('.action-container > :nth-child(2)').click()
      cy.contains('No Task added yet!').should('exist')
    })

    it('modal should be open when click on edit button', () => {
      cy.get('input[data-id="task-name-input"]').type('New Task');
      cy.get('button[data-id="task-add-btn"]').click()
      cy.get('.action-container > :nth-child(1)').click()
      cy.get('#task-modal').should('exist')
    })

    it('edit task should work', () => {
      cy.get('input[data-id="task-name-input"]').type('New Task');
      cy.get('button[data-id="task-add-btn"]').click()
      cy.get('.action-container > :nth-child(1)').click()
      cy.get('#task-modal').should('exist')
      cy.get('#task-modal > .task-form > input').clear().type('Updated Value')
      cy.get('#task-modal > .task-form > button').click()

      cy.get('.task-info > span').should('not.have.text', 'New Task')
      cy.get('.task-info > span').should('have.text', 'Updated Value')
    })


    it('clicking on checkbox should toggle the task completion', () => {
      cy.get('input[data-id="task-name-input"]').type('New Task');
      cy.get('button[data-id="task-add-btn"]').click()
      cy.get('.task-check').click()
      cy.get('.completed').should('exist')
      cy.get('.task-check').click()
      cy.get('.completed').should('not.exist')
    })

    it('Priority styles should be added accordingly', () => {
      cy.get('input[data-id="task-name-input"]').type('New Task');
      cy.get('button[data-id="task-add-btn"]').click()
      cy.get('.task-item').should('have.class', 'low')

      cy.get('input[data-id="task-name-input"]').type('New Task 2');
      cy.get('select[data-id="task-select-input"]').select('high');
      cy.get('button[data-id="task-add-btn"]').click()
      cy.get('.task-item').should('have.class', 'high')
    })
  })