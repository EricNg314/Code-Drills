var gummyBearFlavors = [{
        flavor: "cherry",
        color: "red"
    },
    {
        flavor: "strawberry",
        color: "red"
    },
    {
        flavor: "mango",
        color: "yellow"
    },
    {
        flavor: "pineapple",
        color: "yellow"
    },
    {
        flavor: "lemon",
        color: "yellow"
    },
    {
        flavor: "orange",
        color: "orange"
    },
    {
        flavor: "green apple",
        color: "green"
    },
    {
        flavor: "watermelon",
        color: "red"
    },
    {
        flavor: "pink grapefruit",
        color: "pink"
    },
    {
        flavor: "lime",
        color: "green"
    },
    {
        flavor: "blue rasberry",
        color: "blue"
    },
    {
        flavor: "grape",
        color: "purple"
    }
];

// all functions in this code drill require the use of the .map() method as well as => fat arrow syntax

// create a function that console logs "my favorite gummy bear flavor is <flavor>" for each item in the array.
var favoriteFlavors = gummyBearFlavors.map((flavor) => {
    console.log(`my favorite flavor is ${flavor.flavor}`);
});

// create a function that returns a string that looks like "<number>. <flavor> gummy bears are <color>." for each item in the array.

var mapArrayWithIndex = gummyBearFlavors.map(function (flavor, index) {
    return `${index}. ${flavor.flavor} flavored gummy bears are ${flavor.color}`;
});

console.log(mapArrayWithIndex);

// create a function that checks whether an item in the array has flavors that are either red or yellow and pushes them to new arrays called redFlavor and yellowFlavor.

var redFlavor = [];
var yellowFlavor = [];

var checkFlavorColors = gummyBearFlavors.map((flavor) => {

    if (flavor.color === "red") {
        redFlavor.push(flavor)
    }
    if (flavor.color === "yellow") {
        yellowFlavor.push(flavor)
    }
})

// using the new arrays, create a function that console logs "<flavor name> flavored gummy bears are <color>. mmm delicious!"

var logFlavorColors = (flavors) => {
    flavors.map((flavor) => {
        console.log(`${flavor.flavor} flavored gummy bears are ${flavor.color}. mmm delicious!`);
    })
}

logFlavorColors(redFlavor);
logFlavorColors(yellowFlavor);