var fs = require("fs");
var inquirer = require("inquirer");

function BasicCard (front, back) {
    this.front = front;
    this.back = back;
}

inquirer.prompt([
    {
        name: "title",
        message: "Card Title"
        }, {
        name: "front",
        message: "Front of Card"
        },
        {
        name: "back",
        message: "Back of Card"
        }
]).then(function(createQ) {

   var newQuestion = new BasicCard(BasicCard.front, BasicCard.back);
    var logQuestion = "\nFront " + BasicCard.front + " Back: " + BasicCard.back;
    fs.appendFile("FlashCards.txt", logQuestion);


});

module.exports = BasicCard;