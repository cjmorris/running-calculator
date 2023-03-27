import { novice5k } from "./plans.js";

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
        trainingTableDiv.innerHTML = createTrainingPlan(raceDistance,experienceLevel,weeksToTrain);
        trainingTableDiv.removeAttribute('hidden');
    }
    console.log(novice5k.split('\n'));
}

function createTrainingPlan(raceDistance,experienceLevel,weeksToTrain){

    let trainingPlanContents = '';
    switch(raceDistance){
        case('5km'):
            switch(experienceLevel){
                case('novice'):
                    trainingPlanContents = parseTrainingPlan(novice5k,weeksToTrain);
                    break;
                case('intermediate'):
                    trainingPlanContents = parseTrainingPlan(novice5k,weeksToTrain);
                    break;
                case('advanced'):
                    trainingPlanContents = parseTrainingPlan(novice5k,weeksToTrain);
                    break;
                default:
                    break;
            }
            break;
        case('10km'):
            switch(experienceLevel){
                case('novice'):
                    trainingPlanContents = parseTrainingPlan(novice5k,weeksToTrain);
                    break;
                case('intermediate'):
                    trainingPlanContents = parseTrainingPlan(novice5k,weeksToTrain);
                    break;
                case('advanced'):
                    trainingPlanContents = parseTrainingPlan(novice5k,weeksToTrain);
                    break;
                default:
                    break;
            }
            break;
        case('HM'):
            switch(experienceLevel){
                case('novice'):
                    trainingPlanContents = parseTrainingPlan(novice5k,weeksToTrain);
                    break;
                case('intermediate'):
                    trainingPlanContents = parseTrainingPlan(novice5k,weeksToTrain);
                    break;
                case('advanced'):
                    trainingPlanContents = parseTrainingPlan(novice5k,weeksToTrain);
                    break;
                default:
                    break;
            }
            break;
        case('M'):
            switch(experienceLevel){
                case('novice'):
                    trainingPlanContents = parseTrainingPlan(novice5k,weeksToTrain);
                    break; 
                case('intermediate'):
                    trainingPlanContents = parseTrainingPlan(novice5k,weeksToTrain);
                    break;
                case('advanced'):
                    trainingPlanContents = parseTrainingPlan(novice5k,weeksToTrain);
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }   
    return trainingPlanContents;
}

function parseTrainingPlan(trainingPlan,weeksToTrain){
    return `                    <div class="row tp-results-header">
    <label for="results" class="tp-label tp-results-header-label">Novice 4-Week 5k Training Plan</label>
    <button class="button tp-download-button">Download as pdf</button>
</div>
<table class="centered-table training-plan-table">
    <thead>
        <tr>
            <th></th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Week 1</td>
            <td>Z1: 40 mins</td>
            <td>Z1: 40 mins<br>Z2: 20 mins</td>
            <td>Z1: 40 mins</td>
            <td>Z1: 40 mins</td>
            <td>Z1: 40 mins</td>
            <td>Z1: 40 mins</td>
            <td>Z1: 40 mins</td>
        </tr>
        <tr>
            <td>Week 2</td>
            <td>Z1: 40 mins</td>
            <td>Z1: 40 mins<br>Z2: 20 mins</td>
            <td>Z1: 40 mins</td>
            <td>Z1: 40 mins</td>
            <td>Z1: 40 mins</td>
            <td>Z1: 40 mins</td>
            <td>Z1: 40 mins</td>
        </tr>
        <tr>
            <td>Week 3</td>
            <td>Z1: 40 mins</td>
            <td>Z1: 40 mins<br>Z2: 20 mins</td>
            <td>Z1: 40 mins</td>
            <td>Z1: 40 mins</td>
            <td>Z1: 40 mins</td>
            <td>Z1: 40 mins</td>
            <td>Z1: 40 mins</td>
        </tr>
        <tr>
            <td>Week 4</td>
            <td>Z1: 40 mins</td>
            <td>Z1: 40 mins<br>Z2: 20 mins</td>
            <td>Z1: 40 mins</td>
            <td>Z1: 40 mins</td>
            <td>Z1: 40 mins</td>
            <td>Z1: 40 mins</td>
            <td>Z1: 40 mins</td>
        </tr>
    </tbody>
</table>`;
}