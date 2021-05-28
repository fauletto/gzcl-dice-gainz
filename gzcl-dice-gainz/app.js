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
const t2AFirstRepDisplay = document.querySelector('#t2AFirstRepDisplay');
const t2BFirstRepDisplay = document.querySelector('#t2BFirstRepDisplay');
const t1FollowUpRepDisplay = document.querySelector('#t1FollowUpRepDisplay');
const t2AFollowUpRepDisplay = document.querySelector('#t2AFollowUpRepDisplay');
const t2BFollowUpRepDisplay = document.querySelector('#t2BFollowUpRepDisplay');
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
let t2AReps;
let t2BReps;

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
  t2AReps = getRandNumber(10-6) + 6;
  t2BReps = getRandNumber(10-6) + 6;
  t1FirstRepDisplay.innerText = `1 set of ${t1Reps} reps`;
  t2AFirstRepDisplay.innerText = `1 set of ${t2AReps} reps `;
  t2BFirstRepDisplay.innerText = `1 set of ${t2BReps} reps`;
  t1FollowUpRepDisplay.innerText = `${t1Reps} sets of 1 rep`;
  t2AFollowUpRepDisplay.innerText = `4-6 sets of ${Math.floor(t2AReps / 2)} reps`;
  t2BFollowUpRepDisplay.innerText = `4-6 sets of ${Math.floor(t2BReps / 2)} reps`;
}

const upperRoutine = () =>{
  console.log("You've selected upper body lifts only!");
  t1LiftDisplay.innerText = `${upperBodyLifts[getRandNumber(upperBodyLifts.length)]}`;
  t2ALiftDisplay.innerText = `${upperBodyLifts[getRandNumber(upperBodyLifts.length)]}`;
  t2BLiftDisplay.innerText = `${upperBodyLifts[getRandNumber(upperBodyLifts.length)]}`;
}

const lowerRoutine = () =>{
  console.log("You've selected lower body lifts only!");
  t1LiftDisplay.innerText = `${lowerBodyLifts[getRandNumber(lowerBodyLifts.length)]}`;
  t2ALiftDisplay.innerText = `${lowerBodyLifts[getRandNumber(lowerBodyLifts.length)]}`;
  t2BLiftDisplay.innerText = `${lowerBodyLifts[getRandNumber(lowerBodyLifts.length)]}`;
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
  getMaxes();
  getRoutine();
  getReps();
})