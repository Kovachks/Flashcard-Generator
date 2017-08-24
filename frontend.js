var BasicCard = require('./BasicCard')

var ClozeCard = require('./ClozeCard')

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log("Basic Card Front: " + firstPresident.front); 

// "George Washington"
console.log("Basic Card Back: " + firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log("Cloze Card Text: " + firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log("Cloze Card Partial: " + firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log("Cloze Card Full Text: " + firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");