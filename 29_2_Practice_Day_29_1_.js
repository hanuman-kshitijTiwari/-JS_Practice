const user = {
    name:"Kshitij",
    age : 20
};

// Data ko HTML me insert karna
document.getElementById("name").textContent = user.name;
document.getElementById("age").textContent = user.age;