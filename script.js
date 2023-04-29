const rdm1 = Math.floor(Math.random()*3+1);
//const rdm2 = Math.floor(Math.random(3-1)+1);
//const rdm3 = Math.floor(Math.random(3-1)+1);

let meal = "";
let food = "";
let drink = "";

function Message(num1){
    switch(num1){
        case 1:
            return meal ="Breakfast";
        case 2:
            return meal ="Lunch";
        case 3:
            return meal ="Dinner";
    };/*
    switch(num2){
        case 1:
            return food ="Pizza";
        case 2:
            return food ="Spagetthi";
        case 3:
            return food ="Lasagna";
    };
    switch(num3){
        case 1:
            return drink ="Coke";
        case 2:
            return drink="Pepsi";
        case 3:
            return drink="Sprite";
    }
*/
    return meal;
    }

    Message(rdm1);
    console.log(meal);
    console.log(rdm1);

