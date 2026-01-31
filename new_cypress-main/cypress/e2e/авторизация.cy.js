describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
       
        cy.get ('#mail').type ('german@dolnikov.ru');
        cy.get ('#pass').type ('qa_one_love1');
        cy.get('#loginButton').click();
       
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#messageHeader').should('be.visible');
    })
     it('Проверка востановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
       
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
       
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#messageHeader').should('be.visible');
    })
    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
       
        cy.get ('#mail').type ('german@dolnikov.ru');
        cy.get ('#pass').type ('12345');
        cy.get('#loginButton').click();
       
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#messageHeader').should('be.visible');
    })
    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
       
        cy.get ('#mail').type ('german@dolnik.ru');
        cy.get ('#pass').type ('qa_one_love1');
        cy.get('#loginButton').click();
       
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#messageHeader').should('be.visible');
    })
    it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
       
        cy.get ('#mail').type ('germandolnikov.ru');
        cy.get ('#pass').type ('qa_one_love1');
        cy.get('#loginButton').click();
       
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#messageHeader').should('be.visible');
    })
   it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
       
        cy.get ('#mail').type ('GerMan@Dolnikov.ru');
        cy.get ('#pass').type ('qa_one_love1');
        cy.get('#loginButton').click();
       
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#messageHeader').should('be.visible');
    })
})
// запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome