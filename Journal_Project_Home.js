var i = 0;

function welcomeChange() {  
    if ( i % 2 == 0 ) {
        document.getElementById("Welcome").innerHTML = "WELCOME";
    }
    else {
        document.getElementById("Welcome").innerHTML = "GOODBYE";
    }
    i++;
}