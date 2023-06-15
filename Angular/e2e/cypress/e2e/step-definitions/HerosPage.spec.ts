import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import { Hero } from '../page-objects/Hero';

Given(/^the user is on the landing page$/, () => {
  cy.visit('http://localhost:4200/');
});

Then(
  /^the user shall see the employee dashboard the click the heros button$/,
  () => {
    Hero.clickHeroLink2();
  }
);

Then(
  /^the user shall to remove a hero in order to see the hero list decrease$/,
  () => {
    Hero.clickDeleteLastHero();
  }
);

Then(
  /^the user shall to add a hero in order to see the hero list increase$/,
  () => {
    Hero.clickAddHero();
  }
);

Then(
  /^the user shall to add a hero without a name in order to see the hero list remain the same$/,
  () => {
    Hero.clickAddHeroWithEmptyName();
  }
);

Then(/^the user shall to clear the message$/, () => {
  Hero.clickClearMessages();
});
