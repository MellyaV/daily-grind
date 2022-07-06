//alert("It's working!");


/*
One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content


pic - image src
alt - the alt tag for the image
desc - a description of the coffee
day - the day of the week for the coffee
color - color associated with coffee
name - the name of the coffee
*/


function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
    <p>
    		<img src="${coffee.pic}" alt="${coffee.alt}" id="cofeee"/>
            <strong class="feature">Monday's Coffee Special:</strong> Monday's daily coffee special is <strong class="feature">Pumpkin Spice Latte</strong>, 
            which makes us wish it was always Fall, as this is one of our top sellers!
    </p>
    `;

    return myReturn;

}

let myDate = new Date();
let myDay = myDate.getDay();
let today = "";

switch(myDay){

    case 0:
        today = "Sunday";
    break;

    case 2:
        today = "Tuesday";
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            color: "Pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of bubble tea",
            day: "Wednesdsay",
            desc: `I like me some Bubble Tea!`
        };
    break;

    default:
        today = "Something went wrong!";
}

alert(coffee.pic);
console.log(coffee);
