// JavaScript Exercise: Student Grades Analysis

// Opgave 1
// En Array med 8 forskellige karaktere fra studerende, dette nogen andre tal end dem i eksemplet i opgave beskrivelsen.
// Derfor kan det ske, at der vil være nogen andre resultater for de outputs som bliver logget ud i consollen.
let grades = [72, 89, 94, 55, 81, 67, 76, 93];

// Outputtet til 'console'.
console.log (grades);






//Task 2
//Denne logger længden af arrayet ud. I dette tilfælde 8.
console.log (grades.length)





//Task 3
let grades3 = [72, 89, 94, 55, 81, 67, 76, 93];

for (let i = 0; i < grades3.length; i++) {
    let grade = grades3[i];
    let classification;

    //Jeg vælger at bruge if og else statements, som er en måde at sige om noget er sandt eller falsk på.
    //Grunden til at jeg gør dette, er for at få den til at logge et output ud efter omm betingelserne der er sat bliver mødt.
    if (grade >= 90) {
        classification = 'A';
    } else if (grade >= 80) {
        classification = 'B';
    } else if (grade >= 70) {
        classification = 'C';
    } else if (grade >= 60) {
        classification = 'D';
    } else {
        classification = 'F';
    }

    //Denne logger karakterende ud efter A-B-C-D-F kategorier, ud fra de betingelser jeg at sat i min if of else statements.
    console.log(`${grade}: ${classification}`);
}





//Task 4

let grades4 = [72, 89, 94, 55, 81, 67, 76, 93];

// Trin 1: Udregn summen af alle karakterende. Jeg bruger +=, da det svare til det samme som at skrive a = a + b.
//På denne måde bliver koden kortere og mere simpel at aflæse. Der er også en chance for mindre fejl.
let sum = 0;
for (let i = 0; i < grades4.length; i++) {
    sum += grades4[i];
}

// Trin 2: Her bliver gennemsnittet udregnet.
let average = sum / grades4.length;

// Trin 3: Her evaluere jeg den generelle præstation for klassen, igen ved brug af if og else statements.
let performance;

if (average >= 90) {
    performance = "Excellent";
} else if (average >= 80) {
    performance = "Good";
} else if (average >= 70) {
    performance = "Satisfactory";
} else {
    performance = "Needs Improvement";
}

// Her bliver mine svar logget ud i consollen, for den gennemsnits karakteren og klassens præsentation.
console.log(`Average Grade: ${average.toFixed(2)}`); //.toFixed(2) regner decimaltallet ned til to tal efter kommaet'
console.log(`Class Performance: ${performance}`);

// Trin 4: Her beder jeg den om at logge en besked ud fra hver individuelle karakter.
for (let i = 0; i < grades4.length; i++) {
    let grade = grades4[i];
    let message;    //Her laver jeg en variabel, men lader den med vilje stå tom.
                    //Dette gør jeg fordi, jeg ønsker at værdien skal komme fra mine if og else statements.

    // Her bestemmer jeg hvilke beskeder der skal logges ud efter deres præsentation
    if (grade >= 90) {
        message = "Excellent";
    } else if (grade >= 80) {
        message = "Good";
    } else if (grade >= 70) {
        message = "Satisfactory";
    } else {
        message = "Needs Improvement";
    }

    //Her bliver de enkelte karakterer logget ud, samt den besked der passer til karakteren.
    console.log(`Grade: ${grade} - Performance: ${message}`);
}



//Treasure Hunter
//Jeg vælger at bruge arrayen fra eksemplet i opgaven.
const island = ['-', '-', 'T', 'T', '-'];

// Step 1: Logger ud hvor mange skridt der er på øen.
const numberOfMoves = island.length;
console.log(`There are ${numberOfMoves} moves in the island`);

// Step 2: Forn skridt, logger den ud om skatten er blevet fundet.
for (let i = 0; i < island.length; i++) {
    if (island[i] === 'T') {
        console.log(`Treasure found at move ${i + 1} :)`);
    } else {
        console.log(`No treasure found at ${i + 1} :(`);
    }
}

// Step 3: Log ud hvor mange skatte der er på øen.
const treasureCount = island.filter(item => item === 'T').length;
console.log(`Total treasures in the island: ${treasureCount}`);





// StartUp
// Array 1: First part of the startup name
const firstWords = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];

// Array 2: Second part of the startup name
const secondWords = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];

// Function to generate a random startup name
function getStartupName() {
    // Her bliver der valgt et random index fra arrayene.
    // Jeg bruger Math.floor. Dette gør at vi får et heltal ud som svare til et index nummer i vores arrays.
    const randomFirstIndex = Math.floor(Math.random() * firstWords.length);
    const randomSecondIndex = Math.floor(Math.random() * secondWords.length);

    // Her bliver der valgt et tilfældigt ord fra hver array.
    const firstPart = firstWords[randomFirstIndex];
    const secondPart = secondWords[randomSecondIndex];

    // Ved brug af return, sender den en string tilbage med det tilfældige navn.
    return `Your startup name could be: ${firstPart} ${secondPart}`;
}

//Log navnet ud i consollen.
console.log(getStartupName());
