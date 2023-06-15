import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import { Landing } from "../page-objects/Landing";

Given(/^the user is on the landing page$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});

Then(/^the user shall see the employee dashboard$/, () => {
	Landing.employeeDashboard();
});

Then(/^the user shall see top 4 Heroes displayed$/, () => {
	Landing.listOfTopHeros()
});

Then(/^the user shall select a hero from the dashboard in order to see the hero details displayed$/, () => {
	Landing.viewHeroDetails();
});
