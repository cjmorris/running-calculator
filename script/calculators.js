let selectedUnit = 'metric';

const heartRateMethod = document.getElementById('hr-method');
heartRateMethod.addEventListener('change', updateHRCalculator);

const bpmInput = document.getElementById('bpm-input');
bpmInput.addEventListener('change', updateHRCalculator);

const distanceInput = document.getElementById('distance-input');
distanceInput.addEventListener('change', updatePaceCalculator);

const hourInput = document.getElementById('hour-input');
hourInput.addEventListener('change', updatePaceCalculator);

const minuteInput = document.getElementById('minute-input');
minuteInput.addEventListener('change', updatePaceCalculator);

const secondInput = document.getElementById('second-input');
secondInput.addEventListener('change', updatePaceCalculator);

const metricButton = document.getElementById('metric-units-button');
metricButton.addEventListener('click', e => changeUnit(e));

const imperialButton = document.getElementById('imperial-units-button');
imperialButton.addEventListener('click', e => changeUnit(e));

updatePaceCalculator();
updateHRCalculator();

function updateHRCalculator(){
    const heartRateMethodValue = heartRateMethod.value;
    const bpmValue = bpmInput.value;

    const rangeHeader = document.getElementById('range-header');

    const zone1Low = document.getElementById('z1-low');
    const zone1High = document.getElementById('z1-high');
    const zone2Low = document.getElementById('z2-low');
    const zone2High = document.getElementById('z2-high');
    const zone3Low = document.getElementById('z3-low');
    const zone3High = document.getElementById('z3-high');
    const zone4Low = document.getElementById('z4-low');
    const zone4High = document.getElementById('z4-high');
    const zone5Low = document.getElementById('z5-low');
    const zone5High = document.getElementById('z5-high');

    const zone1Range = document.getElementById('z1-range');
    const zone2Range = document.getElementById('z2-range');
    const zone3Range = document.getElementById('z3-range');
    const zone4Range = document.getElementById('z4-range');
    const zone5Range = document.getElementById('z5-range');

    if (heartRateMethodValue === 'lthr'){
        const ltHRPercentages = [72,81,81,89,96,100,102,105,106,112];

        rangeHeader.textContent = '% LTHR';

        zone1Range.textContent = ltHRPercentages[0] + ' - ' + ltHRPercentages[1];
        zone2Range.textContent = ltHRPercentages[2] + ' - ' + ltHRPercentages[3];
        zone3Range.textContent = ltHRPercentages[4] + ' - ' + ltHRPercentages[5];
        zone4Range.textContent = ltHRPercentages[6] + ' - ' + ltHRPercentages[7];
        zone5Range.textContent = ltHRPercentages[8] + ' - ' + ltHRPercentages[9];

        zone1Low.textContent = Math.round((ltHRPercentages[0] * bpmValue)/100)
        zone1High.textContent = Math.round((ltHRPercentages[1] * bpmValue)/100)
        zone2Low.textContent = Math.round((ltHRPercentages[2] * bpmValue)/100)
        zone2High.textContent = Math.round((ltHRPercentages[3] * bpmValue)/100)
        zone3Low.textContent = Math.round((ltHRPercentages[4] * bpmValue)/100)
        zone3High.textContent = Math.round((ltHRPercentages[5] * bpmValue)/100)
        zone4Low.textContent = Math.round((ltHRPercentages[6] * bpmValue)/100)
        zone4High.textContent = Math.round((ltHRPercentages[7] * bpmValue)/100)
        zone5Low.textContent = Math.round((ltHRPercentages[8] * bpmValue)/100)
        zone5High.textContent = Math.round((ltHRPercentages[9] * bpmValue)/100)
    }else if(heartRateMethodValue === 'mhr'){
        const maxHRPercentages = [64,72,72,80,86,89,91,94,95,100];

        rangeHeader.textContent = '% Max HR';

        zone1Range.textContent = maxHRPercentages[0] + ' - ' + maxHRPercentages[1];
        zone2Range.textContent = maxHRPercentages[2] + ' - ' + maxHRPercentages[3];
        zone3Range.textContent = maxHRPercentages[4] + ' - ' + maxHRPercentages[5];
        zone4Range.textContent = maxHRPercentages[6] + ' - ' + maxHRPercentages[7];
        zone5Range.textContent = maxHRPercentages[8] + ' - ' + maxHRPercentages[9];

        zone1Low.textContent = Math.round((maxHRPercentages[0] * bpmValue)/100);
        zone1High.textContent = Math.round((maxHRPercentages[1] * bpmValue)/100);
        zone2Low.textContent = Math.round((maxHRPercentages[2] * bpmValue)/100);
        zone2High.textContent = Math.round((maxHRPercentages[3] * bpmValue)/100);
        zone3Low.textContent = Math.round((maxHRPercentages[4] * bpmValue)/100);
        zone3High.textContent = Math.round((maxHRPercentages[5] * bpmValue)/100);
        zone4Low.textContent = Math.round((maxHRPercentages[6] * bpmValue)/100);
        zone4High.textContent = Math.round((maxHRPercentages[7] * bpmValue)/100);
        zone5Low.textContent = Math.round((maxHRPercentages[8] * bpmValue)/100);
        zone5High.textContent = Math.round((maxHRPercentages[9] * bpmValue)/100);
    }
}

function updatePaceCalculator(){
    const distanceWeights = [1, 2.085, 4.6, 10.78];
    const metricDistances = [5, 10, 21.0975, 42.195];
    const imperialDistances = [3.10686, 6.21371, 13.1094, 26.219];

    const distanceInputValue = distanceInput.value;
    const hourValue = Number(hourInput.value);
    const minuteValue = Number(minuteInput.value);
    const secondValue = Number(secondInput.value);

    totalSeconds = secondValue + minuteValue * 60 + hourValue * 60 ** 2
    
    let weightIndex = 0;
    if (distanceInputValue === '5km'){
        weightIndex = 0
    } else if (distanceInputValue === '10km'){
        weightIndex = 1
    } else if (distanceInputValue === 'HM'){
        weightIndex = 2
    } else if (distanceInputValue === 'M'){
        weightIndex = 3
    }


    const time5K = document.getElementById('5k-time');
    const time10K = document.getElementById('10k-time');
    const timeHM = document.getElementById('hm-time');
    const timeM = document.getElementById('m-time');

    const totalTime5k = (totalSeconds * distanceWeights[0]/distanceWeights[weightIndex]);
    const totalTime10k = (totalSeconds * distanceWeights[1]/distanceWeights[weightIndex]);
    const totalTimeHM = (totalSeconds * distanceWeights[2]/distanceWeights[weightIndex]);
    const totalTimeM = (totalSeconds * distanceWeights[3]/distanceWeights[weightIndex]);

    time5K.textContent = parseSecondsToHHMMSS(totalTime5k.toFixed(0)).timeFormatted;
    time10K.textContent = parseSecondsToHHMMSS(totalTime10k.toFixed(0)).timeFormatted;
    timeHM.textContent = parseSecondsToHHMMSS(totalTimeHM.toFixed(0)).timeFormatted;
    timeM.textContent = parseSecondsToHHMMSS(totalTimeM.toFixed(0)).timeFormatted;

    const pace5K = document.getElementById('5k-pace');
    const pace10K = document.getElementById('10k-pace');
    const paceHM = document.getElementById('hm-pace');
    const paceM = document.getElementById('m-pace');

    let raceDistances;
    if (selectedUnit === 'metric'){
        raceDistances = metricDistances;
    }else if(selectedUnit === 'imperial'){
        raceDistances = imperialDistances;
    }

    pace5K.textContent = parseSecondsToHHMMSS((totalTime5k/raceDistances[0]).toFixed(0)).timeFormatted;
    pace10K.textContent = parseSecondsToHHMMSS((totalTime10k/raceDistances[1]).toFixed(0)).timeFormatted;
    paceHM.textContent = parseSecondsToHHMMSS((totalTimeHM/raceDistances[2]).toFixed(0)).timeFormatted;
    paceM.textContent = parseSecondsToHHMMSS((totalTimeM/raceDistances[3]).toFixed(0)).timeFormatted;
}

function parseSecondsToHHMMSS(seconds){
    let secondValue = Number(seconds) % 60;
    const minuteTotal = (Number(seconds)-secondValue) / 60;
    let minuteValue = minuteTotal % 60;
    const hourValue = (minuteTotal - minuteValue) /60;

    if(secondValue.toString().length === 1){
        secondValue = '0' + secondValue;
    }

    let timeString = '';
    if (hourValue > 0){
        if(minuteValue.toString().length === 1){
            minuteValue = '0' + minuteValue;
        }
        timeString = `${hourValue}:${minuteValue}:${secondValue}`;

    }else {
        timeString = `${minuteValue}:${secondValue}`;
    }
    return {
        hours: hourValue,
        minutes: minuteValue,
        seconds: secondValue,
        timeFormatted: timeString
    }
}

function changeUnit(event){
    const paceHeader = document.getElementById('results-pace-header')
    
    if(event.target.id === 'metric-units-button'){
        selectedUnit = 'metric';
        imperialButton.classList.remove('units-selected');
        metricButton.classList.add('units-selected');

        paceHeader.textContent = 'Pace (/km)';
    }else if (event.target.id === 'imperial-units-button'){
        selectedUnit = 'imperial';
        metricButton.classList.remove('units-selected');
        imperialButton.classList.add('units-selected');

        paceHeader.textContent = 'Pace (/mi)';
    }
    updatePaceCalculator();
}