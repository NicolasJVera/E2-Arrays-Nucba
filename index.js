const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// --------------------------- EJERCICIOS --------------------------------

// Ejercicio A:
// Las pizzas que tengan un id impar

// const pizzasImpares = pizzas.filter(pizza => pizza.id % 2 !== 0);

// pizzasImpares.forEach(pizza => {
//   console.log(`Las pizzas que tienen el id impar son: ${pizza.id}`);
//   console.log("-----------------------------");
// });

// Ejercicio B:
// Responder: ¿Hay alguna pizza que valga menos de $600?

// const pizzasBaratas = pizzas.filter(pizza => pizza.precio < 600);

// pizzasBaratas.forEach(pizza => {
//   console.log(`Las pizzas con un valor menos de 600 son: ${pizza.nombre}`)
//   console.log("-----------------------------");
// });

// Ejercicio C:
// El nombre de cada pizza con su respectivo precio.

//  const pizzasContainer = document.querySelector('#productos')

//  pizzasContainer.innerHTML = pizzas.map(pizzas => {
//    return `<div>
//     <p>--------</p>
//     <h2>Pizza: ${pizzas.nombre}</h2>
//      <p>Precio: $${pizzas.precio}</p>
//    </div>`
//  }).join('')

//  console.log(pizzasContainer.innerText)

// Ejercicio D:
// Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

// const pizzasContainerDos = document.querySelector("#productos-dos");

// pizzasContainerDos.innerHTML = pizzas
//   .map((pizzas) => {
//     return `<div>
//     <p>--------</p>
//     <h2>Pizza: ${pizzas.nombre}</h2>
//      <p>Precio: $${pizzas.precio}</p>
//      <ul> Los ingredientes son:
//        ${pizzas.ingredientes
//          .map((ingredientes) => {
//            return `<li>${ingredientes}</li>`;
//          })
//          .join("")}
//      </ul>
//    </div>`;
//   })
//   .join("");

// console.log(pizzasContainerDos.innerText);
