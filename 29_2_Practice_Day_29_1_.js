// ```
// const user = {
//     name:"Kshitij",
//     age : 20
// };

// // Data ko HTML me insert karna
// document.getElementById("name").textContent = user.name;
// document.getElementById("age").textContent = user.age;

// ```

// const car = {
//     brand: "BMW",
//     model: "X5",
//     price: 9000000
// };

// function showCar() {
//     document.getElementById("output").textContent =
//         car.brand + " " + car.model + " - ₹" + car.price;
// }


 const users = [
            { name: "Aman", age: 21 },
            { name: "Rahul", age: 22 },
            { name: "Kshitij", age: 20 }
        ];

        const list = document.getElementById("userList");

        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name + " - " + user.age;
            list.appendChild(li);
        });

console.log("hello");