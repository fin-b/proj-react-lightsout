# proj-react-lightsout

A simple browser-based game I've made as part of my journey to learn how to use [React](https://reactjs.org/). I will attempt to fully document my code so that other learners are able to use this as a reference.

## The Game
> _Lights Out is an electronic game released by Tiger Electronics in 1995. The game consists of a 5 by 5 grid of lights. When the game starts, a random number or a stored pattern of these lights is switched on. Pressing any of the lights will toggle it and the adjacent lights. The goal of the puzzle is to switch all the lights off, preferably in as few button presses as possible._
>
> [Wikipedia - Lights Out (game)](https://en.wikipedia.org/wiki/Lights_Out_(game))

<p align="center">
  <img width="400px" src="https://user-images.githubusercontent.com/112185885/187042683-c3142e2a-85a4-4f3c-8442-7db471a3c496.png" />
</p>

 * Click on a tile to toggle its status, as well as the status of the neighbouring tiles
 * When all the lights are off, the status message will change to 'Solved'
 * Click 'Copy Grid' to retrieve the underlying grid state
 * Click 'Next Puzzle' to load a new random puzzle to solve

## Installation

 * Clone...
 * Install React (npm install)...
 * `npm start`...

## Organisation

 * Starting states are stored at...
