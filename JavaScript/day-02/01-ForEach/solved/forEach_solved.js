const diners = [
  {
    name: 'Jerome',
    happiness: 80,
    hunger: 75
  },
  {
    name: 'Jimmy',
    happiness: 80,
    hunger: 20
  },
  {
    name: 'Robert',
    happiness: 70,
    hunger: 20
  },
  {
    name: 'Eric',
    happiness: 50,
    hunger: 80
  }
];

// Using the ForEach method, iterate through each object and increase happiness by 20, and decrease hunger by 20.
diners.forEach((element) => {
  element.happiness += 20
  element.hunger -= 20
});

// Console log the updated 'diners' object
console.log(diners);

// Using the ForEach method, console log the name of each diner if happiness is 100;
diners.forEach((element) => {
  if (element.happiness === 100) {
    console.log(element.name)
  }
});

// Using the ForEach method, if a diner's hunger is at 0, increase hunger to 100 and decrease happiness by 40
// Also print the following with their name "Person ate bad lobster" and "Person's hunger is now 100." Example: "Jerome ate bad lobster" and "Jerome's hunger is now 100."
diners.forEach((element) => {
  if(element.hunger === 0){
    element.hunger = 100;
    element.happiness -= 40;
    console.log(`${element.name} ate bad lobster. ${element.name}'s hunger is now 100.`);
  }
});


