const rdm = Math.floor(Math.random(10-1)+1);


function Message(num){
    switch(num){
        case 1:
            console.log("You get nothing");
            break;
        case 2:
            console.log("You are empty");
            break;
        case 3:
            console.log("bruh");
            break;
        case 4:
            console.log("The sun is shining");
            break;
        case 5:
            console.log("Welcome to the jungle baby");
            break;
        case 6:
            console.log("We went camping");
            break;
        case 7:
            console.log("The night is young and full of terrors");
            break;
        case 8:
            console.log("Sign of power show of force");
            break;
        case 9:
            console.log("Seven seas");
            break;
        case 0:
            console.log("This was long")
            break;

    }
}

Message(rdm);