const raceDistanceInput = document.querySelector('#race-distance-input');
raceDistanceInput.addEventListener('change',updateTrainingPlan)

const experienceLevelInput = document.querySelector('#experience-level-input');
experienceLevelInput.addEventListener('change',updateTrainingPlan)

const weeksToTrainInput = document.querySelector('#wtt-input');
weeksToTrainInput.addEventListener('change',updateTrainingPlan)

function updateTrainingPlan(){
    const raceDistance = raceDistanceInput.value;
    const experienceLevel = experienceLevelInput.value;
    const weeksToTrain = weeksToTrainInput.value;

    const trainingTableDiv = document.querySelector('#tp-results');
    if (raceDistance !== '' && experienceLevel !== '' && weeksToTrain !== ''){
        trainingTableDiv.removeAttribute('hidden');
    }
}