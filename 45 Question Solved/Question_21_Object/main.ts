// Question : 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface Mobile {
    Model : string;
    Ram : string;
    Storage : string;
    Network : string;
    Prize : number;
}

let Mobile = {
    Model : "Samsung Galaxy S22 Ultra",
    Ram : "8GB",
    Storage : "128GB",
    Network : "5G",
    Prize :  232999,
}

console.log(Mobile);