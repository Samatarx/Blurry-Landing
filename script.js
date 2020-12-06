const loadtext = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

//set the load count to 1
let load = 0;

// create a time interval, calls the function blurring and goes on for 20 milliseconds
let interval = setInterval(blurring,20)

function blurring(){
    //increment the load
    load++

    //stops at 99, so it doesn't go on forever
    if (load > 99) {
        clearInterval(interval)
    }

    //changes the text value
    loadtext.innerText = `${load}%`

    //Descrease the opacity of the text so that it disappears using the scale function
    loadtext.style.opacity = scale(load,0,100, 1, 0);
    

    //maps the blur from 30px to 0 using the scale function
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// linear interpolation...
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }