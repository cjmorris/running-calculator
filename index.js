const siteLogo = document.getElementById('site-logo');
siteLogo.addEventListener('click', navigateHome);

const heartRateMethod = document.getElementById('hr-method');
heartRateMethod.addEventListener('change', updateHRCalculator)

const bpmInput = document.getElementById('bpm-input');
bpmInput.addEventListener('change', updateHRCalculator)

updateHRCalculator()

function navigateHome(){
    location.href = 'index.html';
}

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

        zone1Low.textContent = Math.round((maxHRPercentages[0] * bpmValue)/100)
        zone1High.textContent = Math.round((maxHRPercentages[1] * bpmValue)/100)
        zone2Low.textContent = Math.round((maxHRPercentages[2] * bpmValue)/100)
        zone2High.textContent = Math.round((maxHRPercentages[3] * bpmValue)/100)
        zone3Low.textContent = Math.round((maxHRPercentages[4] * bpmValue)/100)
        zone3High.textContent = Math.round((maxHRPercentages[5] * bpmValue)/100)
        zone4Low.textContent = Math.round((maxHRPercentages[6] * bpmValue)/100)
        zone4High.textContent = Math.round((maxHRPercentages[7] * bpmValue)/100)
        zone5Low.textContent = Math.round((maxHRPercentages[8] * bpmValue)/100)
        zone5High.textContent = Math.round((maxHRPercentages[9] * bpmValue)/100)
    }
}