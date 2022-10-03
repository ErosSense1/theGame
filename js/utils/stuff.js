const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const WIDTH = (canvas.width = innerWidth);
const HEIGHT = (canvas.height = innerHeight);
canvas.style.backgroundColor = '#191A21';
canvas.style.position = 'absolute';

const start = document.getElementById('start');
const name = document.getElementById('name');
const version = document.getElementById('version');
const win = document.getElementById('WIN');
const wina = document.getElementById('win');
let sound = new Audio('./sfx/gas.wav');
let hit = new Audio('./sfx/hit.wav');
let lost = new Audio('./sfx/lost.wav');
let nogas = new Audio('./sfx/nogas.wav');
let winS = new Audio('./sfx/win.mp3');
// sound.src = './sfx/space.mp3';
