let animal ={
    name:"Dog",
    age:3,
    weight:10,
    color:"Brown",
    breed:"German Shepherd"
};

for (let key in animal){
    console.log(key + ":" + animal[key]);
}