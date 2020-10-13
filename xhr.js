function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function gamePretty(string){
    string = string.split("-");
    string[0] = capitalizeFirstLetter(string[0]);
    string = string[0] + " " +  string[1];
    return string;
}
////////Use DOM Selection to select items we want to change with AJAX////////////
const starter3 = document.querySelector('.starter3');
const starter3img = document.querySelector('.starter3img');
const start3text = document.querySelector('.card-text')
const start3textsmall = document.querySelector('.text-muted');

////////Create our Request to server
let xhr = new XMLHttpRequest();

////////Set up a callback function to run when server req is successful///////////
xhr.onreadystatechange = () => {
///////Create an if statement that asks if the server req is complete/////////////    
if(xhr.readyState === 4)
///////now server is complete create an if to see if connection succcessful///////
if(xhr.status = 200){
///////Body of the callback where we parse data and use DOM Manipulation//////////
const data = JSON.parse(xhr.response);
console.log(data);
starter3.innerHTML = capitalizeFirstLetter(data.name);
start3text.innerHTML = "Type: " + capitalizeFirstLetter(data.types[0].type.name);
starter3img.src = data.sprites.front_default;
start3textsmall.innerHTML = "Most recent game: " + gamePretty(data.game_indices[19].version.name) + ", " + gamePretty(data.game_indices[18].version.name);

///////Else if clause where we throw an error if we dont have success connecting//
}   else if (xhr.status === 404) {
    alert(`Oh no the page wasn't found`);
}   else if (xhr.status === 500){
    alert(`Awhh man the server is taking a break`)
}
};
///////open server request////////////////////////////////////////////////////////
xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/7')
///////send server request////////////////////////////////////////////////////////
xhr.send();


/////////////////////////////////////////////////////////////////////////////////
//////////////2nd XHR call///////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
let i = new XMLHttpRequest();
////////Use DOM Selection to select items we want to change with AJAX////////////
const starter1 = document.querySelector('.starter1');
const starter1img = document.querySelector('.starter1img');
const start1text = document.querySelector('.card-text')
const start1textsmall = document.querySelector('.text-muted');

////////Create our Request to server
i.onreadystatechange = () => {
if(i.readyState === 4) {
///////now server is complete create an if to see if connection succcessful///////
if(i.status = 200){
///////Body of the callback where we parse data and use DOM Manipulation//////////
const data = JSON.parse(i.response);
console.log(data);
starter1.innerHTML = capitalizeFirstLetter(data.name);
start1text.innerHTML = "Type: " + capitalizeFirstLetter(data.types[0].type.name);
starter1img.src = data.sprites.front_default;
start1textsmall.innerHTML = "Most recent game: " + gamePretty(data.game_indices[19].version.name) + ", " + gamePretty(data.game_indices[18].version.name);

///////Else if clause where we throw an error if we dont have success connecting//
}   else if (i.status === 404) {
    alert(`Oh no the page wasn't found`);
}   else if (i.status === 500){
    alert(`Awhh man the server is taking a break`)
} 
}
};

///////open server request////////////////////////////////////////////////////////
i.open('GET', 'https://pokeapi.co/api/v2/pokemon/1')
///////send server request////////////////////////////////////////////////////////
i.send();


/////////////////////////////////////////////////////////////////////////////////
//////////////3rd XHR call///////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
let x = new XMLHttpRequest();
////////Use DOM Selection to select items we want to change with AJAX////////////
const starter2 = document.querySelector('.starter2');
const starter2img = document.querySelector('.starter2img');
const start2text = document.querySelector('.card-text')
const start2textsmall = document.querySelector('.text-muted');

////////Create our Request to server
x.onreadystatechange = () => {
if(x.readyState === 4) {
///////now server is complete create an if to see if connection succcessful///////
if(x.status = 200){
///////Body of the callback where we parse data and use DOM Manipulation//////////
const data = JSON.parse(x.response);
console.log(data);
starter2.innerHTML = capitalizeFirstLetter(data.name);
start2text.innerHTML = "Type: " + capitalizeFirstLetter(data.types[0].type.name);
starter2img.src = data.sprites.front_default;
start2textsmall.innerHTML = "Most recent game: " + gamePretty(data.game_indices[19].version.name) + ", " + gamePretty(data.game_indices[18].version.name);

///////Else if clause where we throw an error if we dont have success connecting//
}   else if (x.status === 404) {
    alert(`Oh no the page wasn't found`);
}   else if (x.status === 500){
    alert(`Awhh man the server is taking a break`)
} 
}
};

///////open server request////////////////////////////////////////////////////////
x.open('GET', 'https://pokeapi.co/api/v2/pokemon/4')
///////send server request////////////////////////////////////////////////////////
x.send();

