const { game } = require("../game");

// Import necessary modules
const fs = require('fs');
const { JSDOM } = require('jsdom');

// Read the HTML file content
const htmlContent = fs.readFileSync('simon_calls/index.html', 'utf-8');

// Set up a basic Jest test
describe("document title contains the correct title", () => {
    test('Read HTML file with Jest', () => {
    // JSDOM to create a virtual DOM
    const dom = new JSDOM(htmlContent);

    // Test logic here
    const titleElement = dom.window.document.querySelector('title');
    expect(titleElement.textContent).toBe('Simon Game');
    });
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contain the correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});