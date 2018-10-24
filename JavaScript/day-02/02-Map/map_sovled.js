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
// all functions in this code drill require the use of the .map() method

// create a function that console logs "my favorite gummy bear flavor is <flavor>" for each item in the array.
var favoriteFlavors = gummyBearFlavors.map((flavor) => {
    console.log(`my favorite flavor is ${flavor.flavor}`);
});

// create a function that returns a string that looks like "<number>. <flavor> gummy bears are <color>." for each item in the array.

var mapArrayWithIndex = gummyBearFlavors.map(function (flavor, index) {
    return `${index}. ${flavor.flavor} flavored gummy bears are ${flavor.color}`;
});

console.log(mapArrayWithIndex);

// create a function that checks whether an item in the array has flavors that are either red or yellow, and returns 2 arrays (redFlavors and yellowFlavors) with all flavors that match the condition

var checkFlavorColors = gummyBearFlavors.map((flavor) => {

    var redFlavor = [];
    var yellowFlavor = [];

    if (flavor.color === "red") {
        redFlavor.push(flavor)
    }
    if (flavor.color === "yellow") {
        yellowFlavor.push(flavor)
    }

    return redFlavor, yellowFlavor;

})





//