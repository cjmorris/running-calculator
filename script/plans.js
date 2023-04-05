export const weeksToInclude5k = [2,6,8,10,3,7,4,9,1,5];
export const weeksToInclude10k = [1,2,3,6,10,12,7,11,5,9,4,8];
export const weeksToIncludeMarathons = [1,2,3,6,10,12,13,18,14,15,16,17,7,11,5,9,4,8];

export const plans = {
    novice5k: [
        ["B1","RE","Q1","RE","B1","E1","RE"],
        ["B2","RE","Q2","RE","B2","E2","RE"],
        ["B3","RE","Q3","RE","B2","E3","RE"],
        ["B1","RE","Q4","RE","B1","E1","RE"],
        ["B3","R2","S1","RE","B2","E3","RE"],
        ["B4","R2","S2","RE","B3","E4","RE"],
        ["B5","R3","S3","RE","B3","E4","RE"],
        ["B6","R3","S4","RE","B4","E5","RE"],
        ["B2","RE","Q2","RE","R3","E2","RE"],
        ["B1","RE","Q1","RE","R1","RE","RD"]
    ],
    intermediate5k: [],
    advanced5k: [],
    novice10k: [],
    intermediate10k: [],
    advanced10k: [],
    noviceHM: [],
    intermediateHM: [],
    advancedHM: [],
    noviceMarathon: [],
    intermediateMarathon: [],
    advancedMarathon: [],
};
  
export const runTypes = {
    recovery: {
        1: [{Zone: 1, Time: 15}],
        2: [{Zone: 1, Time: 20}],
        3: [{Zone: 1, Time: 25}],
        4: [{Zone: 1, Time: 30}],
        5: [{Zone: 1, Time: 35}],
        6: [{Zone: 1, Time: 40}]
     },
     base: {
        1: [{Zone: 1, Time: 5},{Zone: 2, Time: 10},{Zone: 1, Time: 5}],
        2: [{Zone: 1, Time: 5},{Zone: 2, Time: 15},{Zone: 1, Time: 5}],
        3: [{Zone: 1, Time: 5},{Zone: 2, Time: 20},{Zone: 1, Time: 5}],
        4: [{Zone: 1, Time: 5},{Zone: 2, Time: 25},{Zone: 1, Time: 5}],
        5: [{Zone: 1, Time: 5},{Zone: 2, Time: 30},{Zone: 1, Time: 5}],
        6: [{Zone: 1, Time: 5},{Zone: 2, Time: 35},{Zone: 1, Time: 5}]
     },
     quickInterval: {
        1: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 3, Zone: [4,1], Time: [1,2]},{Zone: 1, Time: 5}],
        2: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 4, Zone: [4,1], Time: [1,2]},{Zone: 1, Time: 5}],
        3: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 5, Zone: [4,1], Time: [1,2]},{Zone: 1, Time: 5}],
        4: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 4, Zone: [4,1], Time: [2,2]},{Zone: 1, Time: 5}]
     },
     sprintInterval: {
        1: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 6, Zone: [5,1], Time: [0.5,1.5]},{Zone: 1, Time: 5}],
        2: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 8, Zone: [5,1], Time: [0.5,1.5]},{Zone: 1, Time: 5}],
        3: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 10, Zone: [5,1], Time: [0.5,1.5]},{Zone: 1, Time: 5}],
        4: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 6, Zone: [5,1], Time: [1,2]},{Zone: 1, Time: 5}],
        5: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 8, Zone: [5,1], Time: [1,2]},{Zone: 1, Time: 5}]
     },
     endQuick: {
        1: [{Zone: 1, Time: 5},{Zone: 2, Time: 10},{Zone: 3, Time: 5}],
        2: [{Zone: 1, Time: 5},{Zone: 2, Time: 15},{Zone: 3, Time: 5}],
        3: [{Zone: 1, Time: 5},{Zone: 2, Time: 15},{Zone: 3, Time: 10}],
        4: [{Zone: 1, Time: 5},{Zone: 2, Time: 20},{Zone: 3, Time: 10}],
        5: [{Zone: 1, Time: 5},{Zone: 2, Time: 25},{Zone: 3, Time: 10}],
        6: [{Zone: 1, Time: 5},{Zone: 2, Time: 20},{Zone: 3, Time: 15}]
     }
  
  };