# Rock The Vote!

The 2018 election has come and gone, and hopefully you all exercised your civic duty and voted! In California there were 11 props being voted on of varying importance. (DST **is** a serious issue!) In this activity you are going to build a table using D3 data binding. There is a provided array of objects that detail each ballot measure that was on the 2018 election.

## Instructions

* Using the starter files provided, create a table row for each object in the `ballots` array declared in `table.js`.
* For ballot measures that have passed, place a green check mark in the last column.
* For ballot measures that did not pass, place a red x mark in the last column.
* Create an event listener, that triggers an alert when the jumbotron is clicked.

## FontAwesome

* Inside of the html there is an included CDN link for fontawesome, which is a library of icons. Look into its documentation for how to use and style their icons.
    * Example: To render a green check mark: `<i class="fas fa-check-circle fa-lg" style="color:Green"></i>`
    * You can change out icons to your liking (eg. switch the check and x to a happy face and sad face)


## Hint(s):

* You do not need to edit `index.html`
* Use the `.html()` method to return `td` elements inside each table row.