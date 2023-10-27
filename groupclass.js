// //Hamster

// class Hamster{     //class Hamster
//     constructor(name){
//         this.name = name  //propreties of class hamster
//         this.owner = ""
//         this.price = 15
//     }

//     wheelRun(){
//         console.log("squeak squeak")
//     }

//     eatFood(){
//         console.log("nibble nibble")
//     }

//     getPrice(){
//         return this.price
//     }

//     getOwner(person) {
//         // this.owner = Person.this.name
//         this.owner = person.name
//     }
// }

// //person

// class Person{   // class person 
//     constructor(name){   
//         this.name = name
//         this.age = 0
//         this.height = 0
//         this.weight = 0
//         this.mood = 0
//         this.hamsters = []
//         this.bankAccount = 0
//     }

//     getName(){
//         return this.name    //function called getName that return the name of the person
//     }

//     getAge(){
//         return this.age    //function called GetAge that return the age of the person
//     }

//     getWeight(){
//         return this.weight   /function called GetWeight that return weight of the person
//     }

//     greet(greeting){
//         console.log(`${this.name} says ${greeting}`)
//     }

//     eat(){
//         this.weight++
//         this.mood++
//     }

//     exercise(){
//         this.weight--
//     }

//     ageUp(){     //anytime he get old his wight goes up hight up mood down and bankaccount up 10
//         this.age++
//         this.height++
//         this.weight++
//         this.mood--
//         this.bankAccount+=10
//     }

//     buyHamster(hamster){
//         this.hamsters.push(hamster)
//         this.mood+=10
//         // this.bankAccount-=getPrice()
//         this.bankAccount-=hamster.getPrice()
//     }
// }


// //Create a Story with your Person class

// //Instantiate a new Person named Timmy
// const person1 = new Person ("Timmy")

// //Age Timmy five years
// for(let i=0; i<5; i++){
//     person1.ageUp()
// }

// //At this point Timmy's a little bummed. As a precocious child, 
// //he feels he's "seen it all" already. Have him eat five times.
// for(let i=0; i<5; i++){
//    person1.eat()
// }

// //Now Timmy's a little heavier than he wants to be. 
// //Kindergarten's coming up and he wants to look good. Have him exercise five times

// for(let i=0; i<5; i++){
//     person1.exercise()
//  }

// // Age Timmy 9 years

// for(let i=0; i<4; i++){
//     person1.ageUp()
// }
// // console.log(person1)

// //Create a hamster named "Gus"
// const hamster1 = new Hamster("Gus")


// //Set Gus's owner to the string "Timmy"
// // hamster1.owner = 'Timmy'
// hamster1.getOwner(person1)

// //Have Timmy "buy" Gus
// person1.buyHamster(hamster1)
// // console.log(person1)

// //Age Timmy 15 years

// for(let i=0; i<6; i++){
//     person1.ageUp()
// }
// // console.log(person1)

// //Have Timmy eat twice

// for(let i=0; i<2; i++){
//     person1.eat()
//  }
// //  console.log(person1)

//  //Have Timmy exercise twice

//  for(let i=0; i<2; i++){
//     person1.exercise()
//  }
//  console.log(person1)


//============= chef class/dinner class ======================
// ===========================
// Chef Make Dinners
// ========================

// class Dinner {
//     constructor(appetizer, entree, dessert){
//         this.appetizer = appetizer
//         this.entree = entree
//         this.dessert = dessert
//     }
//     getOrder(appetizer,entree,dessert){

//         console.log(`Please can i get my order! ${appetizer}, ${entree}, ${dessert}`) 
//     }
//     changeDessert(newDessert){
//         this.dessert = newDessert
//         return this.dessert
//     }
//     getReceipt(){
//         return `Thank you for your service.`
//     }
    
// }

// class Chef {
//     constructor(){
//         this.menu = []
//     }
//     cook(appetizer, entree, dessert){
//         let newDinner = new Dinner(appetizer, entree, dessert)
//         this.menu.push(newDinner)

//     }
// }
 
// let dinner1 = new Dinner()
// let chef1 = new Chef()
// chef1.cook("Fries","Rice And Beans","Cake")
// chef1.cook("Samosa","Biryani","Kheer")
// chef1.cook("Fried Panner","Chicken Biryani","Ice cream")
// // console.log(chef1)
// dinner1.getOrder("Fries","Rice And Beans","Cake")
// console.log(dinner1.getReceipt())
// console.log(dinner1.changeDessert())