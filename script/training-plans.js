import { plans, runTypes, weeksToInclude5k, weeksToInclude10k, weeksToIncludeMarathons  } from "./plans.js";

const raceDistanceInput = document.querySelector('#race-distance-input');
raceDistanceInput.addEventListener('change',updateTrainingPlan)

const experienceLevelInput = document.querySelector('#experience-level-input');
experienceLevelInput.addEventListener('change',updateTrainingPlan)

const weeksToTrainInput = document.querySelector('#wtt-input');
weeksToTrainInput.addEventListener('change',updateTrainingPlan)

function updateTrainingPlan(e){
    const raceDistance = raceDistanceInput.value;
    const experienceLevel = experienceLevelInput.value;
    let weeksToTrain = weeksToTrainInput.value;

    if(e.target.id === 'race-distance-input'){
        weeksToTrain = '';
        if (raceDistance === ''){
            weeksToTrainInput.setAttribute('disabled','');
            weeksToTrainInput.innerHTML = `                            
                    <option value="">----------</option>
                `;
        }else{
            if (raceDistance === '5km'){
                weeksToTrainInput.innerHTML = `                            
                    <option value="">----------</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8 (Recommended)</option>
                    <option value="10">10</option>
                `;

            }else if (raceDistance === '10km'){
                weeksToTrainInput.innerHTML = `                            
                    <option value="">----------</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10 (Recommended)</option>
                    <option value="12">12</option>
                `;
            }else if (raceDistance === 'HM' || raceDistance === 'M'){
                weeksToTrainInput.innerHTML = `                            
                    <option value="">----------</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="16">16 (Recommended)</option>
                    <option value="18">18</option>
                `;
            }
            weeksToTrainInput.removeAttribute('disabled');
        }
    }

    const trainingTableDiv = document.querySelector('#tp-results');
    if (raceDistance !== '' && experienceLevel !== '' && weeksToTrain !== ''){
        trainingTableDiv.innerHTML = createTrainingPlan(raceDistance,experienceLevel,weeksToTrain);
        trainingTableDiv.removeAttribute('hidden');
    }else {
        trainingTableDiv.setAttribute('hidden','');
    }
}

function createTrainingPlan(raceDistance,experienceLevel,weeksToTrain){

    let trainingPlanContents = '';
    switch(raceDistance){
        case('5km'):
            switch(experienceLevel){
                case('novice'):
                    trainingPlanContents = parseTrainingPlan(plans.novice5k,weeksToTrain,weeksToInclude5k,'Novice 5k Training Plan');
                    break;
                case('intermediate'):
                    trainingPlanContents = parseTrainingPlan(intermediate5k,weeksToTrain,weeksToInclude5k,'Intermediate 5k Training Plan');
                    break;
                case('advanced'):
                    trainingPlanContents = parseTrainingPlan(advanced5k,weeksToTrain,weeksToInclude5k,'Advanced 5k Training Plan');
                    break;
                default:
                    break;
            }
            break;
        case('10km'):
            switch(experienceLevel){
                case('novice'):
                    trainingPlanContents = parseTrainingPlan(novice10k,weeksToTrain,weeksToInclude10k,'Novice 10k Training Plan');
                    break;
                case('intermediate'):
                    trainingPlanContents = parseTrainingPlan(intermediate10k,weeksToTrain,weeksToInclude10k,'Intermediate 10k Training Plan');
                    break;
                case('advanced'):
                    trainingPlanContents = parseTrainingPlan(advanced10k,weeksToTrain,weeksToInclude10k,'Advanced 10k Training Plan');
                    break;
                default:
                    break;
            }
            break;
        case('HM'):
            switch(experienceLevel){
                case('novice'):
                    trainingPlanContents = parseTrainingPlan(noviceHM,weeksToTrain,weeksToIncludeMarathons,'Novice Half Marathon Training Plan');
                    break;
                case('intermediate'):
                    trainingPlanContents = parseTrainingPlan(intermediateHM,weeksToTrain,weeksToIncludeMarathons,'Intermediate Half Marathon Training Plan');
                    break;
                case('advanced'):
                    trainingPlanContents = parseTrainingPlan(advancedHM,weeksToTrain,weeksToIncludeMarathons,'Advanced Half Marathon Training Plan');
                    break;
                default:
                    break;
            }
            break;
        case('M'):
            switch(experienceLevel){
                case('novice'):
                    trainingPlanContents = parseTrainingPlan(noviceMarathon,weeksToTrain,weeksToIncludeMarathons,'Novice Marathon Training Plan');
                    break; 
                case('intermediate'):
                    trainingPlanContents = parseTrainingPlan(intermediateMarathon,weeksToTrain,weeksToIncludeMarathons,'Intermediate Marathon Training Plan');
                    break;
                case('advanced'):
                    trainingPlanContents = parseTrainingPlan(advancedMarathon,weeksToTrain,weeksToIncludeMarathons,'Advanced Marathon Training Plan');
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

function parseTrainingPlan(trainingPlan,weeksToTrain,weeksToInclude,heading){
    let trainingPlanHTML = `
    <div class="row tp-results-header">
        <label for="results" class="tp-label tp-results-header-label">${heading} (${weeksToTrain} Weeks)</label>
        <button class="button tp-download-button">Download as pdf</button>
    </div>
    <div class="tp-table-results">
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

    let trainingPlanWeeksLimited = [];
    for(let i = 0;i<weeksToTrain;i++){
        trainingPlanWeeksLimited[weeksToInclude[i]-1] = trainingPlan[weeksToInclude[i]-1];
    }
    trainingPlanWeeksLimited = trainingPlanWeeksLimited.filter(n => n);

    for(let i = 0; i < trainingPlanWeeksLimited.length; i++){
        trainingPlanHTML += `
            <tr> 
                <td>Week ${i+1}</td>
        `;

        for(const trainingCode of trainingPlanWeeksLimited[i]){
            trainingPlanHTML += `<td>${getRunFromCode(trainingCode)}</td>`;
        }
        trainingPlanHTML += '</tr>';
    }

    
    trainingPlanHTML += `
        </tbody>
        </table>
        </div>
    `;
    return trainingPlanHTML;
}

function getRunFromCode(code){
    if(code === "RD"){
        return 'RACE DAY!';
    }else if(code === "RE"){
        return 'REST';
    }else{
        switch(code[0]){
            case('R'):
                return parseRun(runTypes.recovery[code[1]]);
            case('B'):
                return parseRun(runTypes.base[code[1]]);
            case('E'):
                return parseRun(runTypes.endQuick[code[1]]);
            case('Q'):
                return parseRun(runTypes.quickInterval[code[1]]);
            case('S'):
                return parseRun(runTypes.sprintInterval[code[1]]);
        }
    }
}

function parseRun(runArr){
    let run = '';
    run += parseRunSegment(runArr[0]);
    for(let i = 1; i < runArr.length;i++){
        run += `<br>${parseRunSegment(runArr[i])}`;
    }
    return run;
}

function parseRunSegment(runSegment){
    if(runSegment.Repeat){
        return `${runSegment.Repeat} x (Z${runSegment.Zone[0]}: ${runSegment.Time[0]} min, Z${runSegment.Zone[1]}: ${runSegment.Time[1]} min)`;
    }else {
        return `Z${runSegment.Zone}: ${runSegment.Time} mins`;
    }
}