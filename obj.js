let user={
    nmae:"Jhon",
    age:25,
    greet(){
        console.log("Hello!");
    }
};
user.greet();
console.log(Object.keys(user));
console.log(Object.values(user));
user.city="Delhi";
console.log(user);
user.age=30;
console.log(user);
delete user.age;
console.log(user);