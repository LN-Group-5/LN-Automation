import { link } from 'fs';

export class Landing {
  static employeeDashboard() {
    cy.get('h2').contains('Top Heroes');
  }
  static listOfTopHeros() {
    cy.get('.heroes-menu > a').should('have.length', 4);
  }
  static viewHeroDetails() {
    cy.get('.heroes-menu > a:first-child').click();
    cy.get('label').contains('Hero name:');
  }
}
