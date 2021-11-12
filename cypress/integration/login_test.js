import React from 'react'
<reference types="cypress" />

it('google test', function() {
cy.visit("http://google.com")

cy.get('.gLFyf').type('Automation step by step{enter}')


})

it.only('login test', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/')
  cy.get('#txtUsername').type("Admin")
  cy.get('#txtPassword').type('admin123')
  cy.get('#btnLogin').click()
  cy.get('#menu_admin_viewAdminModule > b').click()
  cy.get('#btnAdd').click()
  cy.get('#btnSave').click()
  cy.get('#systemUser_employeeName_empName').type('John Smith')
  cy.get('#systemUser_userName').type('Morda')
  cy.get('#systemUser_password').type('stagg666')
  cy.get('#systemUser_confirmPassword').type('stagg666')
  cy.get('#btnSave').click()
})
