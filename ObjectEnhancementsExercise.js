// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

/* Write an ES2015 Version */
function createInstructor(firstName, lastName){
    return{
        firstName,
        lastName
    }
}

// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// let favoriteNumber = 42;
// const instructor = {
//     firstName: "Colt",
//     [favoriteNumber]: "That is my favorite!s"
// }

// instructor[favoriteNumber] = "That is my favorite!"

// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

const instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye(){
        return this.firstName + "says bye!";
    }
}

// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"

const d = createAnimal("dog", "bark", "Wooof!")
d.bark()

const s = createAnimal("sheep", "bleet","Baaaaa")
s.bleet()

function createAnimal(species, verb, noise){
    return{
        species,
        [verb](){
            return noise;
        }
    }
}