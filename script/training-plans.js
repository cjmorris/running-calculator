import { novice5k, novice10k, noviceHM, noviceMarathon, intermediate5k,
 intermediate10k, intermediateHM, intermediateMarathon, advanced5k,
 advanced10k, advancedHM, advancedMarathon  } from "./plans.js";

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
}

function createTrainingPlan(raceDistance,experienceLevel,weeksToTrain){

    let trainingPlanContents = '';
    switch(raceDistance){
        case('5km'):
            switch(experienceLevel){
                case('novice'):
                    trainingPlanContents = parseTrainingPlan(novice5k,weeksToTrain,'Novice 5k Training Plan');
                    break;
                case('intermediate'):
                    trainingPlanContents = parseTrainingPlan(intermediate5k,weeksToTrain,'Intermediate 5k Training Plan');
                    break;
                case('advanced'):
                    trainingPlanContents = parseTrainingPlan(advanced5k,weeksToTrain,'Advanced 5k Training Plan');
                    break;
                default:
                    break;
            }
            break;
        case('10km'):
            switch(experienceLevel){
                case('novice'):
                    trainingPlanContents = parseTrainingPlan(novice10k,weeksToTrain,'Novice 10k Training Plan');
                    break;
                case('intermediate'):
                    trainingPlanContents = parseTrainingPlan(intermediate10k,weeksToTrain,'Intermediate 10k Training Plan');
                    break;
                case('advanced'):
                    trainingPlanContents = parseTrainingPlan(advanced10k,weeksToTrain,'Advanced 10k Training Plan');
                    break;
                default:
                    break;
            }
            break;
        case('HM'):
            switch(experienceLevel){
                case('novice'):
                    trainingPlanContents = parseTrainingPlan(noviceHM,weeksToTrain,'Novice Half Marathon Training Plan');
                    break;
                case('intermediate'):
                    trainingPlanContents = parseTrainingPlan(intermediateHM,weeksToTrain,'Intermediate Half Marathon Training Plan');
                    break;
                case('advanced'):
                    trainingPlanContents = parseTrainingPlan(advancedHM,weeksToTrain,'Advanced Half Marathon Training Plan');
                    break;
                default:
                    break;
            }
            break;
        case('M'):
            switch(experienceLevel){
                case('novice'):
                    trainingPlanContents = parseTrainingPlan(noviceMarathon,weeksToTrain,'Novice Marathon Training Plan');
                    break; 
                case('intermediate'):
                    trainingPlanContents = parseTrainingPlan(intermediateMarathon,weeksToTrain,'Intermediate Marathon Training Plan');
                    break;
                case('advanced'):
                    trainingPlanContents = parseTrainingPlan(advancedMarathon,weeksToTrain,'Advanced Marathon Training Plan');
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

function parseTrainingPlan(trainingPlan,weeksToTrain,heading){
    let trainingPlanHTML = `
    <div class="row tp-results-header">
        <label for="results" class="tp-label tp-results-header-label">${heading} (${weeksToTrain} Weeks)</label>
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
    `;

    const trainingPlanWeekly = trainingPlan.split(';\n');
    for(let i = 0; i < trainingPlanWeekly.length; i++){
        trainingPlanHTML += `
            <tr> 
                <td>Week ${i+1}</td>
        `;
       let trainingPlanDaily = trainingPlanWeekly[i].split(',');
       console.log(trainingPlanDaily)
        for(const trainingDay of trainingPlanDaily){
            trainingPlanHTML += `<td>${trainingDay}</td>`;
        }
        trainingPlanHTML += '</tr>';
    }

    console.log(trainingPlanWeekly);
    
    trainingPlanHTML += `
        </tbody>
        </table>
    `;
    return trainingPlanHTML;
}