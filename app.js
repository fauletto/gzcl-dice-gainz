// Variables to store array of lifts to be randomized
const upperBodyLifts = ["Bench Press", "Incline Bench Press", "Overhead Press", "Push Press", "Barbell Row"];
const lowerBodyLifts = ["Back Squat", "Front Squat", "Conventional Deadlift", "Sumo Deadlift", "Hack Squat"];
const accessoryLifts = ["Pull Up", "Chin Up", "Dip", "Dumbbell Hammer Curl", "EZ Bar/Barbell Curl", "Triceps Pushdown", "Skullcrusher", "Incline Dumbbell Bench Press", "Flat Dumbbell Bench Press", "Lateral Raise", "Dumbbell Overhead Press", "Dumbbell SLDL", "Dumbbell RDL", "Goblet Squat", "Leg Press", "Leg Extension"];
const squatMaxInput = document.querySelector('#inputSquatMax');
const benchMaxInput = document.querySelector('#inputBenchMax');
const deadliftMaxInput = document.querySelector('#inputDeadliftMax');
const overheadMaxInput = document.querySelector('#inputOverheadMax');
const getRandNumber = (n) =>{
  return Math.floor(Math.random() * n);
}
const upperSelect = document.querySelector('#upperRadio');
const lowerSelect = document.querySelector('#lowerRadio');
const fullSelect = document.querySelector('#fullRadio');
const rollDiceBtn = document.querySelector('#diceRollerBtn')

let squatMax;
let benchMax;
let deadliftMax;
let overheadMax;

const getOneRepMax = (weightInput) =>{
  return weightInput.value;
}

const getMaxes = () =>{
  squatMax = getOneRepMax(squatMaxInput);
  benchMax = getOneRepMax(benchMaxInput);
  deadliftMax = getOneRepMax(deadliftMaxInput);
  overheadMax = getOneRepMax(overheadMaxInput);
  console.log(squatMax, benchMax, deadliftMax, overheadMax);
}

const getLift = (liftInput) =>{
  return liftInput.value;
}

const getReps = () =>{
  
}

const upperRoutine = () =>{
  console.log("Upper day!");
}

const lowerRoutine = () =>{
  console.log("Lower day!");
}

const fullRoutine = () =>{
  console.log("Full body day");
}

const getRoutine = () =>{
  if(upperSelect.checked){
    upperRoutine();
  } else if (lowerSelect.checked) {
    lowerRoutine();
  } else if (fullSelect.checked){
    fullRoutine();
  }
}

rollDiceBtn.addEventListener('click', function(){
  getMaxes();
  getRoutine();
})