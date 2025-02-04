import Gameboard from "./modules/gameboard.js";
import Player from "./modules/player.js";
import ScreenController from "./modules/screenController.js";
import Ship from "./modules/ship.js";
import "./style.css";

const log = console.log;

ScreenController();

/*
For next time:
 - have 'GameData' object that stores gameboards and squares
    as objects of their own. The would be wrappers that contain
    reference to the element, as well as things like coordinates
    of self, whether they have been clicked etc.
    This would then be subscribed to the GameController, which can
    automatically update it when it changes.
 - TDD went out of the window after the parts The Odin Project 
    specified. For next time, I would like to try TDD for all
    the parts where it is useful (as seen on the video with the
    lady giving the talk on the topic).

 - implement these:
      Implement drag and drop to allow players to place their ships.
      Create a 2-player option that lets users take turns by 
         passing the laptop back and forth, or by spinning the 
         monitor around on a desktop. Implement a ‘pass device’ 
         screen so that players don’t see each other’s boards!
      Polish the intelligence of the computer player by having 
         it try adjacent slots after getting a ‘hit’.
*/