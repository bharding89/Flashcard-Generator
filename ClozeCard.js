
var fs = require("fs");
var inquirer = require("inquirer");

function ClozeCard (cloze, partial, ) {
    this.cloze = cloze;
    this.partial = partial;
}

inquirer.prompt([
    {
        name: "cloze",
        message: "Enter Cloze Portion"
        }, {
        name: "partial",
        message: "Enter Partial Portion"
        }
     
]).then(function(createQ) {

   var newQuestion = new ClozeCard(ClozeCard.cloze, ClozeCard.partial);
    var logCloze = "\nFront " + ClozeCard.cloze + " Back: " + ClozeCard.partial;
    fs.appendFile("ClozeCards.txt", logCloze);


});


module.exports = ClozeCard;