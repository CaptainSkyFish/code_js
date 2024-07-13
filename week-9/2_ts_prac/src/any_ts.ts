interface User {
    username: string;
    age: number;
    firstName: string;
    email: string;
}


type User2 {
    username: string;
    age: number;
    firstName: string;
    email: string;
}

const user1 = {
    username: "CptSkyFIsh",
    age: 21,
    firstName: "ajay",
    email: "ajaymail@mail.com"
}


const isLegal: (user: User) => boolean = (user: User) => {
    return user.age > 18 ? true : false;
}

console.log(`${user1.firstName}'s age is legal : ${isLegal(user1)}`);