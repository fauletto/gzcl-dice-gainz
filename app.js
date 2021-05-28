// Variables to store array of lifts to be randomized
const upperBodyLifts = ["Bench Press", "Incline Bench Press", "Overhead Press", "Push Press", "Barbell Row"];
const lowerBodyLifts = ["Back Squat", "Front Squat", "Conventional Deadlift", "Sumo Deadlift", "Hack Squat"];
const accessoryLifts = ["Pull Up", "Chin Up", "Dip", "Dumbbell Hammer Curl", "EZ Bar/Barbell Curl", "Triceps Pushdown", "Skullcrusher", "Incline Dumbbell Bench Press", "Flat Dumbbell Bench Press", "Lateral Raise", "Dumbbell Overhead Press", "Dumbbell SLDL", "Dumbbell RDL", "Goblet Squat", "Leg Press", "Leg Extension"];
const squatMaxInput = document.querySelector('#inputSquatMax');
const benchMaxInput = document.querySelector('#inputBenchMax');
const deadliftMaxInput = document.querySelector('#inputDeadliftMax');
const overheadMaxInput = document.querySelector('#inputOverheadMax');
const t1LiftDisplay = document.querySelector('#t1LiftDisplay');
const t2LiftDisplay = document.querySelector('#t2LiftDisplay');
const t3ALiftDisplay = document.querySelector('#t3ALiftDisplay');
const t3BLiftDisplay = document.querySelector('#t3BLiftDisplay');
const t3CLiftDisplay = document.querySelector('#t3CLiftDisplay');
const t1FirstRepDisplay = document.querySelector('#t1FirstRepDisplay');
const t2FirstRepDisplay = document.querySelector('#t2FirstRepDisplay');
const t1FollowUpRepDisplay = document.querySelector('#t1FollowUpRepDisplay');
const t2FollowUpRepDisplay = document.querySelector('#t2FollowUpRepDisplay');
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
let t1Reps;
let t2Reps;

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
  t1Reps = getRandNumber(6-3) + 3;
  t2Reps = getRandNumber(10-6) + 6;
  t1FirstRepDisplay.innerText = `${t1Reps}`;
  t2FirstRepDisplay.innerText = `${t2Reps}`;
  t1FollowUpRepDisplay.innerText = `${t1Reps} sets of 1`;
  t2FollowUpRepDisplay.innerText = `4 sets of ${Math.floor(t2Reps / 2)}`;
}

const upperRoutine = () =>{
  console.log("You've selected upper body lifts only!");
  return upperBodyLifts[getRandNumber(upperBodyLifts.length)];
}

const lowerRoutine = () =>{
  console.log("You've selected lower body lifts only!");
  return lowerBodyLifts[getRandNumber(upperBodyLifts.length)];
}

const fullRoutine = () =>{
  console.log("Full body day");
}

const getRoutine = () =>{
  if(upperSelect.checked){
    upperRoutine();
    getReps();
  } else if (lowerSelect.checked) {
    lowerRoutine();
  } else if (fullSelect.checked){
    fullRoutine();
  }
}

rollDiceBtn.addEventListener('click', function(){
  // getMaxes();
  getRoutine();
  getReps();
})