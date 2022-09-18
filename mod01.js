let users = [
    {
        'ID':'012',
        'name': 'Eva',
        'lastname': 'Maria',
        'age': 18,
        'email': 'evamaria@gmail.com',
        'phone': 6547896547,
    },
    {
        'ID':'075',
        'name': 'Anotima',
        'lastname': 'Teroni',
        'age': 68,
        'email': 'evolution8@gmail.com',
        'phone': 1532895443,
    },
    {
        'ID':'067',
        'name': 'Jose Antonio',
        'lastname': 'Voloz',
        'age': 18,
        'email': 'joseAnto@gmail.com',
        'phone': 135896547,
    },
    {
        'ID':'02',
        'name': 'Maria Estella',
        'lastname': 'Gaviria',
        'age': 34,
        'email': 'mariaeste',
        'phone': 654643547,
    },
    {
        'ID':'01',
        'name': 'Bartolomeo',
        'lastname': 'Becerra',
        'age': 19,
        'email': 'bart@gmail.com',
        'phone': 6547896547,
    },
    {
        'ID':'219',
        'name': 'Marco Santo',
        'lastname': 'Peña',
        'age': 24,
        'email': 'marcoSanto@gmail.com',
        'phone': 1536796547,
    },
    {
        'ID':'745',
        'name': 'Tommy',
        'lastname': 'Perez',
        'age': 42,
        'email': 'tommy@gmail.com',
        'phone': 1679096547,
    },
];


let getFullName = () => {
    let fullName = `El usuario ${users[4]} ${users[4].name} ${users[4].lastname}`
    return fullName
};

let getAge = () => {
    let userAge = `la edad de ${users[4].name} es ${users[4].age}`
    return userAge
};

let getContactInfo = () => {
    let userContact = `la informacion de contacto del usuario ${users[4].name} es: 
    \n telefono: ${users[4].phone} 
    \n correo: ${users[4].email}`

    return userContact
};



module.exports = { 
    getFullName,
    getAge,
    getContactInfo
 }