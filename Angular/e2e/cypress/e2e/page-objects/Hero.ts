import { link } from 'fs';

export class Hero {
  //Selectors
  static heroLink = (): string => `//a[@href='/heroes']`;
  static heroDeleteClass = (): string =>
    `.heroes > :nth-last-child(1) > .delete`;

  //Actions

  static clickHeroLink() {
    cy.xpath(this.heroLink()).click();
  }
  static clickDeleteLastHero() {
    cy.wait(1000);
    cy.get(this.heroDeleteClass()).click();
    cy.get('li').then(($items) => {
      cy.wrap($items).should('have.length', 8);
    });
  }
  static clickAddHero() {
    cy.get('#new-hero').type(`New here ${new Date().getTime()}`);
    cy.get('.add-button').click();
    cy.wait(3000);
    cy.get('li').should('have.length', 9);
  }
  static clickAddHeroWithEmptyName() {
    cy.get('.add-button').click();
    cy.wait(3000);
    cy.get('li').should('have.length', 9);
  }
  static clickClearMessages() {
    cy.get('.clear').click().should('not.exist');
  }
}
