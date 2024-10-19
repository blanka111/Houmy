export function createStep(step) {
    cy.step(step)
}

export function createIntercept(method, url) {
    return cy.intercept(method, url);                //need to return so i can use in alias.as
}

export function createSession(sessionId, callback) {
    cy.session(sessionId, callback);
}

export function urlLoad (url) {
    cy.visit(url);
}

export function generateEmail(){
    const character = 'abcdefghijklmnopqrst';
    let email = '';
    for (let i = 0; i < 10; i++) {
        email += character.charAt(Math.floor(Math.random()*character.length));
    }
    email = '@gmail.com';
    return email;
}

export function generatePhone(){
}


export function generateRandomNr(length){
const chars = '123456789';
let number = '';
for (let i = 0; i < 10; i++) {
    number += chars.charAt(Math.floor(Math.random()*chars.length));
};
return number;
}

export function generateRandomAddress(){
const streets = ["Stromovka","Hlavní","Vysoká","Strakonická","V Údolí","Na Stráni"
];
return `${streets[Math.floor(Math.random()*streets.length)]} ${generateRandomNr(2)}`;
}

export function generateRandomText(length){
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let text = '';
    for (let i = 0; i < length; i++) {
        text += chars.charAt(Math.floor(Math.random()*chars.length));
    };
    return text;
}
