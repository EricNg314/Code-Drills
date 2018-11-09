var ballots = [{
        prop: 1,
        description: "Issues $4 billion in bonds for housing programs and veterans' home loans",
        result: "passed"
    },
    {
        prop: 2,
        description: "Authorizes state to use revenue from millionaire's tax for $2 billion in bonds for homelessness prevention housing",
        result: "passed"
    },
    {
        prop: 3,
        description: "Issues $8.877 billion in bonds for water-related infrastructure and environmental projects",
        result: "failed"
    },
    {
        prop: 4,
        description: "Issues $1.5 billion in bonds for children's hospitals",
        result: "passed"
    },
    {
        prop: 5,
        description: "Revises process for homebuyers who are age 55 or older or severely disabled to transfer their tax assessments",
        result: "failed"
    },
    {
        prop: 6,
        description: "Repeals 2017's fuel tax and vehicle fee increases and requires public vote on future increases",
        result: "failed"
    },
    {
        prop: 7,
        description: "Authorizes legislature to provide for permanent daylight saving time if federal government allows",
        result: "passed"
    },
    {
        prop: 8,
        description: "Requires dialysis clinics to issue refunds for revenue above a certain amount",
        result: "failed"
    },
    {
        prop: 10,
        description: "Allows local governments to regulate rent on any type of housing",
        result: "failed"
    },
    {
        prop: 11,
        description: "Allow ambulance providers to require workers to remain on call during breaks paid",
        result: "passed"
    },
    {
        prop: 12,
        description: "Bans sale of meat from animals confined in spaces below specific sizes",
        result: "passed"
    }
];

// create a table row for each object within `ballots`
d3.select("tbody")
    .selectAll("tr")
    .data(ballots)
    .enter()
    .append("tr")
    .html(function (d) {
        // if the proposition passed, place a green check mark
        if (d.result === "passed") {
            return `
            <td>${d.prop}</td>
            <td>${d.description}</td>
            <td><i class="fas fa-check-circle fa-lg" style="color:Green"></i></td>`;
        }
        // if the proposition failed, place a red x
        else if (d.result === "failed") {
            return `
            <td>${d.prop}</td> 
            <td>${d.description}</td>
            <td><i class="fas fa-times-circle fa-lg" style="color:Tomato"></i></td>`;
            s
        }
    });

// create an event listener that triggers when the jumbotron is clicked. 
//The triggered event prompts the user with an alert reading "You better have voted!"
d3.select(".jumbotron").on("click", function () {
    alert("YOU BETTER HAVE VOTED!");
});