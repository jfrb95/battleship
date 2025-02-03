import Gameboard from "./gameboard.js";
import Player from "./player.js";
import Ship from "./ship.js";
import GameController from "./gameController.js";

const log = console.log;

/*
desired flow:
click on a square
screenController registers click and sends info to gameController
gameController uses info to update subscribers
subscribers are screenController
screenController updates screen

*/


export default function ScreenController() {

    const game = GameController();
    game.subscribe(updateSquare);

    const boardContainer = document.querySelector('#board-container');
    const playButton = document.querySelector('#play-button');
    
    playButton.addEventListener('click', () => {});

    //set up board displays
    const playerBoards = [
        DisplayBoard().render(boardContainer), 
        DisplayBoard().render(boardContainer)
    ];
    
    playerBoards[0].element.addEventListener("click", (event) => {
        if (game.activePlayerIndex !== 0) {
            return;
        }
        if (event.target.classList.contains("empty-square")) {
            game.playRound(event.target.id)
        }
    })
    
    playerBoards[1].element.addEventListener("click", (event) => {
        if (game.activePlayerIndex !== 1) {
            return;
        }
        if (event.target.classList.contains("empty-square")) {
            game.playRound(event.target.id)
        }
    })

    //misc funcs
    function updateSquare({activePlayerIndex, key, hitOrMiss}) {
        log(activePlayerIndex);
        const boardDisplay = playerBoards[activePlayerIndex];
        const targetSquare = boardDisplay.element.querySelector(`[id="${key}"]`);
        targetSquare.classList.replace('empty-square', hitOrMiss);
    }

    //display factory functions
    function DisplayBoard() {
        const element = document.createElement('div');
        element.classList.add('display-board');

        const squares = new Map();
        for (let i = 0; i < 10; i+=1) {
            for (let j = 0; j < 10; j+=1) {
                const square = DisplaySquare(`${i}${j}`);
                squares.set(`${i}${j}`, square);
                wrap(square);
            }
        }

        function wrap(...childComponents) {
            for (const child of childComponents) {
                element.appendChild(child.element);
            }
            return this;
        }

        return {
            element,
            render(parent=null) {

                let target = document.body;

                if (parent) {
                    if (parent.element) {
                        target = parent.element;
                    }
                    else {
                        target = parent;
                    }
                }
                target.appendChild(element);
                
                return this;
            },
            wrap
        }
    }

    function DisplaySquare(id) {
        const element = document.createElement('div');
        element.classList.add('empty-square');
        element.id = id;

        //delete when finished:
        element.textContent = id;

        return {
            element,
            render(parent=null) {

            let target = document.body;

            if (parent) {
                if (parent.element) {
                    target = parent.element;
                }
                else {
                    target = parent;
                }
            }
            target.appendChild(element);
            
            return this;
        },
        }
    }

    return {
        
    }

}