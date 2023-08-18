describe('Adding a Task', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });
    it('Doesnot accept an empty task', () => {
        cy.get('[data-test="btn"]').click();
        cy.get('.lists').should('have.length', 0);
    });
    it('successfully adds a task', () => {  
      const taskText = 'New Task';
        cy.get('[data-test="inputs"]').type(taskText);
        cy.get('[data-test="btn"]').click();
      
      cy.contains('ul', taskText);
    });
  });
  
describe('Deleting a Task', () => {
    it('successfully deletes a task', () => {
        cy.visit('http://localhost:3000'); 
        cy.wait(1000);
        cy.get('[data-test="inputs"]').type('First task');
        cy.get('[data-test="btn"]').click();
        cy.get('[data-test="inputs"]').type('Second task');
        cy.get('[data-test="btn"]').click();
        cy.get('[data-test="inputs"]').type('Third task');
        cy.get('[data-test="btn"]').click();

        cy.get('[data-test="lists"]').first().as('firstTask');
        cy.get('@firstTask').find('[data-test="button0"]').click();
        cy.get('[data-test="lists"]').should('have.length', 1);
    });
});
  
describe('Test State Management', () => {
    it('Checking if its stored', () =>{
        cy.visit('http://localhost:3000');
        cy.get('[data-test="inputs"]').type('First task');
        cy.get('[data-test="btn"]').click();
        cy.window()
        .its('store')
        .invoke('getState')
        .should('deep.equal', {
            Todo: { todos: [{id: 'First task', todo: 'First task'}]}
        });
    })
})