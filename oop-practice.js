// STEP 1
// Named declaration
class Cat {

}

// Anonymous declaration
let Dog = class {

};

// STEP 2
class Cat {

}

let Dog = class {

};

let myCat = new Cat();
let myDog = new Dog();

// STEP 3
class Animal {
    constructor() {
        console.log("The Animal has been created");
    }
}

let animal = new Animal();

// STEP 4
class Animal {
    constructor(message) {
        console.log(message);
    }
}

let animal = new Animal("The Animal has been created");

// STEP 5
class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
    }
}

let animal = new Animal(
    "dog",
    "Labrador",
    "Black",
    "24 inches",
    "36 inches"
);

// STEP 6

class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
    }
}

let animal = new Animal(
    "dog",
    "Labrador",
    "Black",
    "24 inches",
    "36 inches"
);

for (let property in animal) {
    console.log(property + ": " + animal[property]);
}
// STEP 7
class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
    }

    speak() {
        if (this.type === "dog") {
            return `The ${this.color} dog is barking!`;
        } else if (this.type === "cat") {
            return `The ${this.color} cat is meowing!`;
        }
    }
}

let animal = new Animal(
    "dog",
    "Labrador",
    "Black",
    "24 inches",
    "36 inches"
);

// STEP 8
class Animal {
    #type;
    #breed;
    #color;
    #height;
    #length;

    constructor(type, breed, color, height, length) {
        this.#type = type;
        this.#breed = breed;
        this.#color = color;
        this.#height = height;
        this.#length = length;
    }

    #checkType() {
        if (this.#type === "dog") {
            return "dog";
        } else {
            return "cat";
        }
    }

    speak() {
        return `The ${this.#checkType()} has made a noise!`;
    }
}

let animal = new Animal(
    "dog",
    "Labrador",
    "Black",
    "24 inches",
    "36 inches"
);

console.log(animal.speak());

// STEP 9
String.prototype.findWords = function (word) {

    let regex = new RegExp(word, "gi");

    let matches = this.match(regex);

    let count = matches ? matches.length : 0;

    alert(`The word "${word}" was found ${count} time(s).`);
};

let paragraph = "The dog chased the cat. The dog barked. The dog ran.";

paragraph.findWords("dog");