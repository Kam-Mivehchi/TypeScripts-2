const { Prompt } = require('../models');

const promptData = [
    {
        prompt: "// Declare a variable called person with a specific object type annotation\nlet person: {\n name: string;\nlocation: string;\nisProgrammer: boolean;\n};",
        language_id: 1, //typescript
    },
    {
        prompt: "// Assign person to an object with all the necessary properties and value types\nperson = {\nname: 'Danny',\nlocation: 'UK',\nisProgrammer: true,\n};",
        language_id: 1, //typescript
    },
    {
        prompt: "// person.isProgrammer = 'Yes'; // ERROR: should be a boolean\nperson = {\nname: 'John',\nlocation: 'US',\n}; // ERROR: missing the isProgrammer property",
        language_id: 1, //typescript
    },
    {
        prompt: "Typically an array contains zero to many objects of a single type. TypeScript has special analysis around arrays which contain multiple types, and where the oder in which they are index is important.\nconst failingResponse = ['Not Found', 404];",
        language_id: 1,
    },
    {
        prompt: `//input from the user\nconst min = parseInt(prompt("Enter a min value: "));\nconst max = parseInt(prompt("Enter a max value: "));\n\n// generating a random number\nconst a = Math.floor(Math.random() * (max - min + 1)) + min;\n\n// display a random number\nconsole.log('Random value between '+min+' and '+max+' is '+a);\n //Example Output\n Enter a min value: 1\nEnter a max value: 50\nRandom value between 1 and 50 is 47`,
        language_id: 2, //javascript
    },
    {
        prompt: `// The following variables are defined in the global scope\nvar num1 = 20,\nnum2 = 3,\nname = 'John';\n// This function is defined in the global scope\nfunction multiply() {\nreturn num1 * num2;\n}\nmultiply(); // Returns 60\n// A nested function example\nfunction getScore() {\nvar num1 = 2,\nnum2 = 3;\nfunction add() {\nreturn name + ' scored ' + (num1 + num2);\n}\nreturn add();\n}\ngetScore(); // Returns "John scored 5"\n`,
        language_id: 2,
    },
    {
        prompt: "<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n</body>\n</html>",
        language_id: 3, //html
    },
    {
        prompt: "<h2>HTML Links</h2>\n<p>HTML links are defined with the a tag:</p>\n<a href='https://www.w3schools.com'>This is a link</a>",
        language_id: 3,
    },
    {
        prompt: "The selector points to the HTML element you want to style.  Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.\np {\ncolor: red;\ntext-align: center;\n}",
        language_id: 4, //css
    },
    {
        prompt: "The universal selector uses the asterisk (i.e *) symbol for denoting the selector as a universal selector. It can be used to select all elements and apply a specific style.\n* {\nproperty: value;\n}",
        language_id: 4,
    },
    {
        prompt: "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
        language_id: 5, //english
    },
    {
        prompt: "Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live.",
        language_id: 5,
    },
    {
        prompt: "Software and cathedrals are much the same — first we build them, then we pray.",
        language_id: 5,

    },
    {
        prompt: "It's not a bug... it's an undocumented feature.",
        language_id: 5,
    },
];

const seedPrompts = () => Prompt.bulkCreate(promptData);

module.exports = seedPrompts;