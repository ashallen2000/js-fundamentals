/*
const questions = [
    "A male Gerudo is born into the tribe every how many years?",
    "What is the name of Link's fairy in Ocarina of Time?",
    "What console was Twilight Princess originally released on?",
    "What happens to the Mirror of Twilight at the end of Twilight Princess?",
    "What is the first song that Link learns in Ocarina of time?"
];

console.log(questions[1])

basic array practise - moving to putting questions into an object now
*/

/*
const question1 = {
    text: "A male Gerudo is born into the tribe every how many years?",
    answer: "One is born into the tribe every 100 years."
}

console.log(question1.text)
console.log(question1.answer)
practising using objects. now to combine both arrays and objects.
*/

/*
const questions = [
    {
        text: "A male Gerudo is born into the tribe every how many years?",
        answer: "One is born into the tribe every 100 years."
    },
    {
        text: "What is the name of Link's fairy in Ocarina of Time?",
        answer: "Link's fairy is named 'Navi'."
    },
    {
        text: "What console was Twilight Princess originally released on?",
        answer: "Twilight Princess was originally released on the Nintendo Gamecube."
    },
    {
        text: "What happens to the Mirror of Twilight at the end of Twilight Princess?",
        answer: "It is shattered by Midna."
    },
    {
        text: "What is the first song that Link learns in Ocarina of time?",
        answer: "The first song that link learns, is Zelda's Lullaby."
    }
];

console.log(questions[0].text)
console.log(questions[0].answer)

This approach is of course also obselete,
as it involves requiring the user to answer the questions in an exact way.
Multiple choice will avoid this.
*/

const questions = [
    {
        text: "A male Gerudo is born into the tribe every how many years?",
        options: ["50 years.", "100 years.", "150 years.", "200 years."],
        answer: "100 years."
    },
    {
        text: "What is the name of Link's fairy in Ocarina of Time?",
        options: ["Navi.", "Tatl.", "Fi.", "Zelda."],
        answer: "Navi."
    },
    {
        text: "What console was Twilight Princess originally released on?",
        options: ["Wii.", "Gamecube.", "SNES.", "N64."],
        answer: "Gamecube."
    },
    {
        text: "What happens to the Mirror of Twilight at the end of Twilight Princess?",
        options: ["It is shattered by Midna.", "It is stolen by ganondorf.", "It is shattered by link.","Zant harnesses its power."],
        answer: "It is shattered by Midna."
    },
    {
        text: "What is the first song that Link learns in Ocarina of time?",
        options: ["Zelda's Lullaby", "Song of Storms", "Saria's Song","Deku's Theme."],
        answer: "Zelda's Lullaby"
    }
];

const checkAnswer = (selected, correctAnswer) => {
    if (selected === correctAnswer) {
        console.log("Correct Answer! Good job.")
    } else
    {console.log("Incorrect. Try again!")}
};

checkAnswer("Zelda's Lullaby", "Zelda's Lullaby")
checkAnswer("Zelda's Lullaby","Zelda's Good Song")



questions.forEach((question) =>{
    console.log(question.text);
})




