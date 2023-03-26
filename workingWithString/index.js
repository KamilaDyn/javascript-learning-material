const text = 'We love food'

const country ='Poland'

// console.log(country[0]);

// console.log(text.indexOf('W'));
// console.log(text.lastIndexOf('d'));
// console.log(text.indexOf('food'));

// console.log(text.slice(3));
// console.log(text.slice(3,8))


const checkPlaneSeat = function (seat) {
    const s = seat.slice(-1)

    if(s === 'B' || s ==='E') console.log('You got the middle seat')
    else console.log(('you got lucky'));
}

checkPlaneSeat('11B')

checkPlaneSeat('22C')

const lowerCaseText= text.toLowerCase()
const upperCaseText = text.toUpperCase()


const myEmail = 'Kamila.Dynysiuk@GMAIL.com'

const normalizeEmail = myEmail.toLowerCase().trim()

//replacing

const priceGB = '288.99£';
const priceUS = priceGB.replace('£', '$').replace(',','.')


///replace all

const shoppingAsk = 'Please buy me a flour. One kilo of flour.'
// console.log(shoppingAsk.replace(/flour/g, 'sugar'));

const checkSportWear = function (equipment){
    const inbBags = equipment.toLowerCase()

    if(inbBags.includes('high heels') || inbBags.includes('dress')) console.log('You can join to practice sport');

    else console.log('you need to bring sport equipment');
}

checkSportWear('I wear hight heels and dress')
checkSportWear('I wear training shoe, short and t-shirt')

// capitalie names 


const capitalizeName = function (name){
    const names = name.split(' ');

    const newsUpperName =[]

    for (const n of names){
        // newsUpperName.push(n[0].toUpperCase() + n.slice(1))
//or
        newsUpperName.push(n.replace(n[0], n[0].toLowerCase()))
    }

    console.log(newsUpperName.join(' '));
}

capitalizeName('kamila dynysiuk')


// padding string 
// add a number of characters to the string until the string has a certain desired length

const message = 'Go to gate 23'; 

// console.log(message.padStart(35, '+').padEnd(38, '+'))


/// masking numbers of string length


const maskCreditCard = function(number){
    const str = number + '';

    const last = str.slice(-4)

    return last.padStart(str.length, '*')

}

console.log(maskCreditCard(45273872828738372))
console.log(maskCreditCard('78738378738782739273926'))


// repeat method  allows u to repeat the same string multiple times

const message2 = 'Bad weather... All Departures delayed...'

// console.log(message2.repeat(5));


const planesInLine = function(n){
    console.log(`There are ${n} planes in line ${'!'.repeat(n)}`);
}

planesInLine(3)

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/


document.body.append(document.createElement('textarea'))
document.body.append(document.createElement('button'))

document.querySelector('button').addEventListener('click', function(){
    const text = document.querySelector('textarea').value
    const rows = text.split('\n')


    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');

        const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
    console.log('output',`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
})