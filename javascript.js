function input() {
    var p = prompt('Enter a year mitron');
    var year = parseInt(p);
    switch(year) {
       case 2014: text ="achhe din for sure";
       break;
       case 2015: text ="achhe din for sure";
       break;
       case 2016: text ="achhe din for sure";
       break;
       case 2017: text ="achhe din for sure";
       break;
       case 2018: text ="achhe din for sure";
       break;
       case 2019: text ="achhe din for sure";
       break;
       case 2020: text ="2020 is bad vibes mitro";
       break;
       case 1947: text="We got independence, ofcourse achhe din";
       break;
       default: text = "No PM Modi, no achhe din";
       break;
     }
    var h1 = document.createElement('h4'); 
    var output = document.createTextNode(text);
    h1.setAttribute('id', 'year');   
    h1.appendChild(output)             
    document.getElementById('flex-box-result').appendChild(h1);   
} 
function reset() {
    document.getElementById('year').remove();
}

function addmodi(){
    var picture = document.createElement("img");
    var lol = document.getElementById("modiji");
    picture.src = "https://media.tenor.com/images/daa0aa761c49cdabb74e6df480c13047/tenor.gif";
    lol.appendChild(picture);
}
