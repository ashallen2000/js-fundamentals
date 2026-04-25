const title = "Javascript Fundamentals";
let taskCounter = 0;
let darkMode = true;


const addTask = (taskName) => {
    console.log("Adding task: " + taskName);
};

const toggleDarkMode = () => {
    console.log("dark mode toggled");
};


addTask("buy milk");
toggleDarkMode();


const counterHeading = document.querySelector("#task-count")

counterHeading.textContent = ("tasks: " + taskCounter)