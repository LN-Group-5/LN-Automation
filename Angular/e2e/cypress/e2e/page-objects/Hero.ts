import { link } from 'fs';

export class Hero {
  //Selectors
  static heroLink1 = (): string => `a[href='/heroes']`;
  static heroLink2 = (): string => `//a[@href='/heroes']`;

  //Actions
  static clickHeroLink() {
    cy.get(this.heroLink1()).click();
  }
  static clickHeroLink2() {
    cy.xpath(this.heroLink2()).click();
  }
  static clickDeleteLastHero() {
    cy.wait(1000);
    cy.get('.heroes > :nth-last-child(1) > .delete').click();
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
