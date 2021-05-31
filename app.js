// Variables to store array of lifts to be randomized
const upperBodyLifts = ["Bench Press", "Incline Bench Press", "Overhead Press", "Push Press", "Barbell Row"];
const lowerBodyLifts = ["Back Squat", "Front Squat", "Conventional Deadlift", "Sumo Deadlift", "Hack Squat"];
const fullBodyLifts = ["Bench Press", "Incline Bench Press", "Overhead Press", "Push Press", "Barbell Row", "Back Squat", "Front Squat", "Conventional Deadlift", "Sumo Deadlift", "Hack Squat"];
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
const t1Weight = document.querySelector('#t1WeightDisplay');
const t2AWeight = document.querySelector('#t2AWeightDisplay');
const t2BWeight = document.querySelector('#t2BWeightDisplay');

let squatMax;
let benchMax;
let deadliftMax;
let overheadMax;
let t1Reps;
let t2AReps;
let t2BReps;
let threeRM;
let fourRM;
let fiveRM;
let sixRM;
let sevenRM;
let eightRM;
let nineRM;
let tenRM;
let mainLift;
let weightTarget;


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

//work on the next two functions

const getLiftName = () =>{
  if(t1LiftDisplay.innerText.includes("Bench") || t1LiftDisplay.innerText.includes("Row")){
    mainLift = benchMax;
  } else if(t1LiftDisplay.innerText.includes("Squat")){
    mainLift = squatMax
  } else if(t1LiftDisplay.innerText.includes("Deadlift")){
    mainLift = deadliftMax;
  } else if(t1LiftDisplay.innerText.includes("Overhead") || t1LiftDisplay.innerText.includes("Push")){
    mainLift = overheadMax;
  }
  return mainLift;
}

const testFunc = (liftName, repTarget) =>{
  if (repTarget === 3){
    weightTarget = Math.round(liftName * .95);
  } else if (repTarget === 4){
    weightTarget = Math.round(liftName * .93);
  } else if (repTarget === 5){
    weightTarget = Math.round(liftName * .85);
  } else if (repTarget === 6){
    weightTarget = Math.round(liftName * .83);
  } else if (repTarget === 7){
    weightTarget = Math.round(liftName * .82);
  } else if (repTarget === 8){
    weightTarget = Math.round(liftName * .78);
  } else if (repTarget === 9){
    weightTarget = Math.round(liftName * .76);
  } else if (repTarget === 10){
    weightTarget = Math.round(liftName * .74);
  }
  return weightTarget;
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
  t1LiftDisplay.innerText = `${fullBodyLifts[getRandNumber(fullBodyLifts.length)]}`;
  t2ALiftDisplay.innerText = `${fullBodyLifts[getRandNumber(fullBodyLifts.length)]}`;
  t2BLiftDisplay.innerText = `${fullBodyLifts[getRandNumber(fullBodyLifts.length)]}`;
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
  getReps();
  getLiftName();
  testFunc(mainLift, t1Reps);
})