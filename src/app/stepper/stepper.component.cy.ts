import {StepperComponent} from "./stepper.component";

describe('StepperComponent', () => {
  it('mounts', () => {
    cy.mount(StepperComponent)
  })
})

// it('stepper should default to 0', () => {
//   cy.mount(StepperComponent)
//   cy.get('span').should('have.text', '0')
// })

it('stepper should default to 0', () => {
  cy.mount(StepperComponent)
  cy.get('[data-cy=counter]').should('have.text', '0')
})
