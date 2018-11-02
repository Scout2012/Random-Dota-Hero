var fs = require("fs");

function random_hero(max){
  return Math.floor(Math.random() * Math.floor(max));
}

function read_file(file){
  return String(fs.readFileSync("./" + file)).split("\n");
}

const promise =new Promise((resolve, reject) => {
  let heroes = read_file("dota_heroes.txt");
  if(typeof(read_file("dota_heroes.txt")) !== 'undefined'){
    //passes heroes to the '.then' function
    resolve(heroes);
  } else {
    reject(Error(":something went wrong when fetching heroes"));
  }
  //.then takes in one parameter
}).then(heroes => {
  console.log(heroes[random_hero(heroes.length)]);
}).catch(err => {
  console.log(err);
})
