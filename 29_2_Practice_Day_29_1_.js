// ```
// const user = {
//     name:"Kshitij",
//     age : 20
// };

// // Data ko HTML me insert karna
// document.getElementById("name").textContent = user.name;
// document.getElementById("age").textContent = user.age;

// ```

const car = {
    brand: "BMW",
    model: "X5",
    price: 9000000
};

function showCar() {
    document.getElementById("output").textContent =
        car.brand + " " + car.model + " - ₹" + car.price;
}

