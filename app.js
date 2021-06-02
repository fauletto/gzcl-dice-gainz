// Variables to store array of lifts to be randomized
const upperBodyLifts = ["Bench Press", "Incline Bench Press", "Overhead Press", "Push Press", "Barbell Row"];
const lowerBodyLifts = ["Back Squat", "Front Squat", "Conventional Deadlift", "Sumo Deadlift", "Hack Squat"];
const fullBodyLifts = ["Bench Press", "Incline Bench Press", "Overhead Press", "Push Press", "Barbell Row", "Back Squat", "Front Squat", "Conventional Deadlift", "Sumo Deadlift", "Hack Squat"];
const upperT3 = ["Pull-up", "Chin-up", "Dip", "Dumbbell Hammer Curl", "EZ Bar/Barbell Curl", "Triceps Pushdown", "Skullcrusher", "Incline Dumbbell Bench Press", "Flat Dumbbell Bench Press", "Lateral Raise", "Dumbbell Overhead Press"];
const lowerT3 = ["Dumbbell SLDL", "Dumbbell RDL", "Goblet Squat", "Leg Press", "Leg Curl", "Leg Extension"];
const fullBodyT3 = ["Pull-up", "Chin-up", "Dip", "Dumbbell Hammer Curl", "EZ Bar/Barbell Curl", "Triceps Pushdown", "Skullcrusher", "Incline Dumbbell Bench Press", "Flat Dumbbell Bench Press", "Lateral Raise", "Dumbbell Overhead Press", "Dumbbell SLDL", "Dumbbell RDL", "Goblet Squat", "Leg Press", "Leg Curl", "Leg Extension"];
const squatMaxInput = document.querySelector('#inputSquatMax');
const benchMaxInput = document.querySelector('#inputBenchMax');
const deadliftMaxInput = document.querySelector('#inputDeadliftMax');
const overheadMaxInput = document.querySelector('#inputOverheadMax');
const t1LiftDisplay = document.querySelector('#t1LiftDisplay');
const t2LiftDisplay = document.querySelector('#t2LiftDisplay');
const t3ALiftDisplay = document.querySelector('#t3ALift');
const t3BLiftDisplay = document.querySelector('#t3BLift');
const t3CLiftDisplay = document.querySelector('#t3CLift');
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
let t1WeightBase;
let t2AWeightBase;
let t2BWeightBase;
let weightTarget;
let upperBodyCopy;
let lowerBodyCopy;
let fullBodyCopy;
let t3UpperCopy;
let t3LowerCopy;
let t3FullCopy;
let t3ALift;
let t3BLift;
let t3CLift;

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

//Refactor T1, T2A, T2B functions into one anonymous function?

const getWeights = () =>{
  getT1Weight();
  getT2AWeight();
  getT2BWeight();
}

const getT1Weight = () =>{
  if(t1LiftDisplay.innerText.includes("Bench") || t1LiftDisplay.innerText.includes("Row")){
    t1WeightBase = benchMax;
  } else if(t1LiftDisplay.innerText.includes("Squat")){
    t1WeightBase = squatMax
  } else if(t1LiftDisplay.innerText.includes("Deadlift")){
    t1WeightBase = deadliftMax;
  } else if(t1LiftDisplay.innerText.includes("Overhead") || t1LiftDisplay.innerText.includes("Push")){
    t1WeightBase = overheadMax;
  }
  return t1WeightBase;
}

const getT2AWeight = () =>{
  if(t2ALiftDisplay.innerText.includes("Bench") || t2ALiftDisplay.innerText.includes("Row")){
    t2AWeightBase = benchMax;
  } else if(t2ALiftDisplay.innerText.includes("Squat")){
    t2AWeightBase = squatMax
  } else if(t2ALiftDisplay.innerText.includes("Deadlift")){
    t2AWeightBase = deadliftMax;
  } else if(t2ALiftDisplay.innerText.includes("Overhead") || t2ALiftDisplay.innerText.includes("Push")){
    t2AWeightBase = overheadMax;
  }
  return t2AWeightBase;
}

const getT2BWeight = () =>{
  if(t2BLiftDisplay.innerText.includes("Bench") || t2BLiftDisplay.innerText.includes("Row")){
    t2BWeightBase = benchMax;
  } else if(t2BLiftDisplay.innerText.includes("Squat")){
    t2BWeightBase = squatMax
  } else if(t2BLiftDisplay.innerText.includes("Deadlift")){
    t2BWeightBase = deadliftMax;
  } else if(t2BLiftDisplay.innerText.includes("Overhead") || t2BLiftDisplay.innerText.includes("Push")){
    t2BWeightBase = overheadMax;
  }
  return t2BWeightBase;
}

const t1WeightCalc = (liftName, repTarget) =>{
  if (repTarget === 3){
    t1WeightTarget = Math.round(Math.ceil(liftName * .93) / 5 ) * 5;
  } else if (repTarget === 4){
    t1WeightTarget = Math.round(Math.ceil(liftName * .90) / 5) * 5;
  } else if (repTarget === 5){
    t1WeightTarget = Math.round(Math.ceil(liftName * .87) / 5) * 5 ;
  } else if (repTarget === 6){
    t1WeightTarget = Math.round(Math.ceil(liftName * .85) / 5) * 5;
  }
  t1Weight.innerText = `~ ${t1WeightTarget}lbs`;
  return t1WeightTarget;
}

const t2AWeightCalc = (liftName, repTarget) =>{
  if (repTarget === 6){
    t2AWeightTarget = Math.round(Math.ceil(liftName * .85) / 5) * 5;
  } else if (repTarget === 7){
    t2AWeightTarget = Math.round(Math.ceil(liftName * .83) / 5) * 5;
  } else if (repTarget === 8){
    t2AWeightTarget = Math.round(Math.ceil(liftName * .80) / 5) * 5;
  } else if (repTarget === 9){
    t2AWeightTarget = Math.round(Math.ceil(liftName * .77) / 5) * 5;
  } else if (repTarget === 10){
    t2AWeightTarget = Math.round(Math.ceil(liftName * .75) / 5) * 5;
  }
  t2AWeight.innerText = `~ ${t2AWeightTarget}lbs`;
  return t2AWeightTarget;
}

const t2BWeightCalc = (liftName, repTarget) =>{
  if (repTarget === 6){
    t2BWeightTarget = Math.round(Math.ceil(liftName * .85) / 5) * 5;
  } else if (repTarget === 7){
    t2BWeightTarget = Math.round(Math.ceil(liftName * .83) / 5) * 5;
  } else if (repTarget === 8){
    t2BWeightTarget = Math.round(Math.ceil(liftName * .80) / 5) * 5;
  } else if (repTarget === 9){
    t2BWeightTarget = Math.round(Math.ceil(liftName * .77) / 5) * 5;
  } else if (repTarget === 10){
    t2BWeightTarget = Math.round(Math.ceil(liftName * .75) / 5) * 5;
  }
  t2BWeight.innerText = `~ ${t2BWeightTarget}lbs`;
  return t2BWeightTarget;
}

const getWorkingWeights = () =>{
  t1WeightCalc(t1WeightBase, t1Reps);
  t2AWeightCalc(t2AWeightBase, t2AReps);
  t2BWeightCalc(t2BWeightBase, t2BReps);
}

const upperRoutine = () =>{
  console.log("You've selected upper body lifts only!");
  upperBodyCopy = [...upperBodyLifts];
  t1LiftDisplay.innerText = `${upperBodyCopy.splice([getRandNumber(upperBodyCopy.length)], 1)}`;
  t2ALiftDisplay.innerText = `${upperBodyCopy.splice([getRandNumber(upperBodyCopy.length)], 1)}`;
  t2BLiftDisplay.innerText = `${upperBodyCopy.splice([getRandNumber(upperBodyCopy.length)], 1)}`;
}

const lowerRoutine = () =>{
  console.log("You've selected lower body lifts only!");
  lowerBodyCopy = [...lowerBodyLifts];
  t1LiftDisplay.innerText = `${lowerBodyCopy.splice([getRandNumber(lowerBodyCopy.length)], 1)}`;
  t2ALiftDisplay.innerText = `${lowerBodyCopy.splice([getRandNumber(lowerBodyCopy.length)], 1)}`;
  t2BLiftDisplay.innerText = `${lowerBodyCopy.splice([getRandNumber(lowerBodyCopy.length)], 1)}`;
  
}

const fullRoutine = () =>{
  console.log("Full body day");
  fullBodyCopy = [...fullBodyLifts]
  t1LiftDisplay.innerText = `${fullBodyCopy.splice([getRandNumber(fullBodyCopy.length)], 1)}`;
  t2ALiftDisplay.innerText = `${fullBodyCopy.splice([getRandNumber(fullBodyCopy.length)], 1)}`;
  t2BLiftDisplay.innerText = `${fullBodyCopy.splice([getRandNumber(fullBodyCopy.length)], 1)}`;
}

const getLiftName = (userInput, liftName) =>{
  return userInput.value === "Select a lift" ||
  userInput.value ===""
  ? liftName.splice([getRandNumber(liftName.length)], 1)
  : userInput.value;
}

t3LiftReset = () =>{
  t3ALiftDisplay.value = "Select a lift";
  t3BLiftDisplay.value = "Select a lift";
  t3CLiftDisplay.value = "Select a lift";
}

const getT3Lifts = () =>{
  t3UpperCopy = [...upperT3];
  t3LowerCopy = [...lowerT3];
  t3FullCopy = [...fullBodyT3];
  if(upperSelect.checked){
    t3ALift = getLiftName(t3ALiftDisplay, t3UpperCopy);
    t3BLift = getLiftName(t3BLiftDisplay, t3UpperCopy);
    t3CLift = getLiftName(t3CLiftDisplay, t3UpperCopy);
  }else if(lowerSelect.checked){
    t3ALift = getLiftName(t3ALiftDisplay, t3LowerCopy);
    t3BLift = getLiftName(t3BLiftDisplay, t3LowerCopy);
    t3CLift = getLiftName(t3CLiftDisplay, t3LowerCopy);
  }else if(fullSelect.checked){
    t3ALift = getLiftName(t3ALiftDisplay, t3FullCopy);
    t3BLift = getLiftName(t3BLiftDisplay, t3FullCopy);
    t3CLift = getLiftName(t3CLiftDisplay, t3FullCopy);
  }
  t3ALiftDisplay.value = `${t3ALift}`;
  t3BLiftDisplay.value = `${t3BLift}`;
  t3CLiftDisplay.value = `${t3CLift}`;
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
  getWeights();
  getWorkingWeights();
  getT3Lifts();
});

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});