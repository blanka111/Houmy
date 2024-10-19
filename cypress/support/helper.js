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

export function generateEmail(length){
    const character = 'abcdefghijklmnopqrst';
    let email = '';
    for (let i = 0; i < length; i++) {
        email += character.charAt(Math.floor(Math.random()*character.length));
    }
    email += '@gmail.com';
    return email;
}

export function generatePhone(){
    const chars = '1234567890';
    let number = '7';
    for (let i = 0; i < 8; i++) {
        number += chars.charAt(Math.floor(Math.random()*chars.length));
    };
    return number;
}


export function generateRandomNr(length){
const chars = '123456789';
let number = '';
for (let i = 0; i < length; i++) {
    number += chars.charAt(Math.floor(Math.random()*chars.length));
};
return number;
}

export function generateRandomAddress(){
const streets = ["Stromovka","Hlavní","Vysoká","Strakonická","Na Stráni"
];
return `${streets[Math.floor(Math.random()*streets.length)]} ${generateRandomNr(2)}`;
}

export function generateRandomFirstName(){
    const names = ["Jan","Petr","David","Viktor","Pavel","Robert","Michal"
    ];
    return `${names[Math.floor(Math.random()*names.length)]}`;
}

export function generateRandomSurname(){
    const surnames = ["Helma","Petr","Volek","Volf","Vlk","Gola","Král","Slabý"
    ];
    return `${surnames[Math.floor(Math.random()*surnames.length)]}`;
}

export function generateRandomTown(){
    const town = ["Praha","Strakonice","Olomouc","Jihlava","Liberec","Karlovy Vary","Ostrava","Opava"
    ];
    return `${town[Math.floor(Math.random()*town.length)]}`;
}



export function generateRandomText(length){
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let text = '';
    for (let i = 0; i < length; i++) {
        text += chars.charAt(Math.floor(Math.random()*chars.length));
    };
    return text;
}
