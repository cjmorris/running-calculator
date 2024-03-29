export const weeksToInclude5k = [1,5,8,10,3,7,4,9,2,6];
export const weeksToInclude10k = [1,2,3,6,10,12,7,11,5,9,4,8];
export const weeksToIncludeMarathons = [1,2,3,6,7,10,13,18,14,17,12,11,5,15,9,16,4,8];

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
   intermediate5k: [
      ["B3","B3","Q2","RE","B1","E3","RE"],
      ["B4","B4","Q3","RE","B2","E4","RE"],
      ["B5","B5","Q4","RE","B2","E5","RE"],
      ["B3","B3","Q5","RE","B1","E3","RE"],
      ["B5","B5","S1","RE","B2","E5","RE"],
      ["B6","B6","S3","R4","B3","E6","RE"],
      ["B7","B6","S4","R4","B3","E7","RE"],
      ["B8","B7","S5","R4","B4","E8","RE"],
      ["B4","R4","Q2","R3","R3","E4","RE"],
      ["B3","R2","Q1","RE","R1","RE","RD"]
   ],
   advanced5k: [
      ["B3","B3","Q2","R1","B1","E3","RE"],
      ["B5","B4","Q3","R2","B2","E4","RE"],
      ["B6","B5","Q4","R3","B2","E5","RE"],
      ["B3","B3","Q5","R3","B1","E3","RE"],
      ["B6","B5","S1","R4","B2","E5","RE"],
      ["B7","B6","S3","R4","B3","E6","R4"],
      ["B8","B6","S4","R4","B3","E7","R4"],
      ["B9","B7","S5","R4","B4","E8","R4"],
      ["B5","R4","Q2","R3","R3","E4","R2"],
      ["B3","R2","Q1","R1","R1","RE","RD"]
   ],
   novice10k: [
      ["B1","RE","Q1","RE","B1","B4","RE"],
      ["B2","RE","Q2","RE","B2","B5","RE"],
      ["B3","RE","Q3","RE","B2","B6","RE"],
      ["B1","RE","Q4","RE","B1","B4","RE"],
      ["B3","R2","S1","RE","B2","M1","RE"],
      ["B4","R2","S2","RE","B3","M2","RE"],
      ["B5","R3","S3","RE","B3","M3","RE"],
      ["B6","R3","S4","RE","B4","B6","RE"],
      ["B6","R3","S4","RE","B4","M4","RE"],
      ["B6","R3","S4","RE","B4","M5","RE"],
      ["B2","RE","Q2","RE","R3","M1","RE"],
      ["B1","RE","Q1","RE","R1","RE","RD"]
   ],
   intermediate10k: [
      ["B3","B3","Q2","RE","B1","B6","RE"],
      ["B4","B4","Q3","RE","B2","B7","RE"],
      ["B5","B5","Q4","RE","B2","M1","RE"],
      ["B3","B3","Q5","RE","B1","B6","RE"],
      ["B5","B5","S1","RE","B2","M1","RE"],
      ["B6","B6","S3","R4","B3","M2","RE"],
      ["B7","B6","S4","R4","B3","M3","RE"],
      ["B8","B7","S5","R4","B4","B8","RE"],
      ["B8","B7","S5","R4","B4","M3","RE"],
      ["B8","B7","S5","R4","B4","M4","RE"],
      ["B4","R4","Q2","R3","R3","B6","RE"],
      ["B3","R2","Q1","RE","R1","RE","RD"]
   ],
   advanced10k: [
      ["B3","B3","Q2","R1","B1","M1","RE"],
      ["B5","B4","Q3","R2","B2","M2","RE"],
      ["B6","B5","Q4","R3","B2","M3","RE"],
      ["B3","B3","Q5","R3","B1","M1","RE"],
      ["B6","B5","S1","R4","B2","M4","RE"],
      ["B7","B6","S3","R4","B3","M5","R4"],
      ["B8","B6","S4","R4","B3","M6","R4"],
      ["B9","B7","S5","R4","B4","M1","R4"],
      ["B9","B7","S5","R4","B4","F1","R4"],
      ["B9","B7","S5","R4","B4","L1","R4"],
      ["B5","R4","Q2","R3","R3","M1","R2"],
      ["B3","R2","Q1","R1","R1","RE","RD"]
   ],
   noviceHM: [
      ["B1","RE","Q1","RE","B1","B4","RE"],
      ["B2","RE","Q2","RE","B2","B5","RE"],
      ["B3","RE","Q3","RE","B2","B6","RE"],
      ["B3","RE","Q3","RE","B2","B4","RE"],
      ["B3","RE","Q3","RE","B2","M1","RE"],
      ["B1","RE","Q4","RE","B1","M2","RE"],
      ["B3","R2","S1","RE","B2","M3","RE"],
      ["B4","R2","S2","RE","B3","B6","RE"],
      ["B4","R2","S2","RE","B3","M4","RE"],
      ["B4","R2","S2","RE","B3","M5","RE"],
      ["B5","R3","S3","RE","B3","M6","RE"],
      ["B6","R3","S4","RE","B4","M2","RE"],
      ["B6","R3","S4","RE","B4","M6","RE"],
      ["B6","R3","S4","RE","B4","F1","RE"],
      ["B6","R3","S4","RE","B4","M6","RE"],
      ["B6","R3","S4","RE","B4","F1","RE"],
      ["B2","RE","Q2","RE","R3","M2","RE"],
      ["B1","RE","Q1","RE","R1","RE","RD"]
   ],
   intermediateHM: [
      ["B3","B3","Q2","RE","B1","B4","RE"],
      ["B4","B4","Q3","RE","B2","B5","RE"],
      ["B5","B5","Q4","RE","B2","B6","RE"],
      ["B5","B5","Q4","RE","B2","B4","RE"],
      ["B5","B5","Q4","RE","B2","M1","RE"],
      ["B3","B3","Q5","RE","B1","M2","RE"],
      ["B5","B5","S1","RE","B2","M3","RE"],
      ["B5","B5","S1","RE","B2","B6","RE"],
      ["B5","B5","S1","RE","B2","M4","RE"],
      ["B6","B6","S3","R4","B3","M5","RE"],
      ["B7","B6","S4","R4","B3","M6","RE"],
      ["B8","B7","S5","R4","B4","M2","RE"],
      ["B8","B7","S5","R4","B4","M6","RE"],
      ["B8","B7","S5","R4","B4","F1","RE"],
      ["B8","B7","S5","R4","B4","M6","RE"],
      ["B8","B7","S5","R4","B4","F1","RE"],
      ["B4","R4","Q2","R3","R3","M3","RE"],
      ["B3","R2","Q1","RE","R1","RE","RD"]
   ],
   advancedHM: [
      ["B3","B3","Q2","R1","B1","B4","RE"],
      ["B5","B4","Q3","R2","B2","B6","RE"],
      ["B6","B5","Q4","R3","B2","M1","RE"],
      ["B6","B5","Q4","R3","B2","B4","RE"],
      ["B6","B5","Q4","R3","B2","M2","RE"],
      ["B3","B3","Q5","R3","B1","M3","RE"],
      ["B6","B5","S1","R4","B2","M4","RE"],
      ["B7","B6","S3","R4","B3","M1","R4"],
      ["B7","B6","S3","R4","B3","M5","R4"],
      ["B7","B6","S3","R4","B3","M6","R4"],
      ["B8","B6","S4","R4","B3","M6","R4"],
      ["B9","B7","S5","R4","B4","M2","R4"],
      ["B9","B7","S5","R4","B4","L1","R4"],
      ["B9","B7","S5","R4","B4","F1","R4"],
      ["B9","B7","S5","R4","B4","L1","R4"],
      ["B9","B7","S5","R4","B4","F1","R4"],
      ["B5","R4","Q2","R3","R3","M4","R2"],
      ["B3","R2","Q1","R1","R1","RE","RD"]
   ],
   noviceMarathon: [
      ["B1","RE","Q1","RE","B1","M1","RE"],
      ["B2","RE","Q2","RE","B2","M2","RE"],
      ["B3","RE","Q3","RE","B2","M3","RE"],
      ["B3","RE","Q3","RE","B2","M1","RE"],
      ["B3","RE","Q3","RE","B2","M4","RE"],
      ["B1","RE","Q4","RE","B1","M5","RE"],
      ["B3","R2","S1","RE","B2","M6","RE"],
      ["B4","R2","S2","RE","B3","M3","RE"],
      ["B4","R2","S2","RE","B3","L1","RE"],
      ["B4","R2","S2","RE","B3","L3","RE"],
      ["B5","R3","S3","RE","B3","L5","RE"],
      ["B6","R3","S4","RE","B4","F1","RE"],
      ["B6","R3","S4","RE","B4","L7","RE"],
      ["B6","R3","S4","RE","B4","L9","RE"],
      ["B6","R3","S4","RE","B4","F3","RE"],
      ["B6","R3","S4","RE","B4","F5","RE"],
      ["B2","RE","Q2","RE","R3","M1","RE"],
      ["B1","RE","Q1","RE","R1","RE","RD"]
   ],
   intermediateMarathon: [
      ["B3","B3","Q2","RE","B1","M1","RE"],
      ["B4","B4","Q3","RE","B2","M2","RE"],
      ["B5","B5","Q4","RE","B2","M3","RE"],
      ["B5","B5","Q4","RE","B2","M1","RE"],
      ["B5","B5","Q4","RE","B2","M4","RE"],
      ["B3","B3","Q5","RE","B1","M5","RE"],
      ["B5","B5","S1","RE","B2","M6","RE"],
      ["B5","B5","S1","RE","B2","M3","RE"],
      ["B5","B5","S1","RE","B2","L1","RE"],
      ["B6","B6","S3","R4","B3","L3","RE"],
      ["B7","B6","S4","R4","B3","L5","RE"],
      ["B8","B7","S5","R4","B4","F1","RE"],
      ["B8","B7","S5","R4","B4","L7","RE"],
      ["B8","B7","S5","R4","B4","L9","RE"],
      ["B8","B7","S5","R4","B4","F3","RE"],
      ["B8","B7","S5","R4","B4","F5","RE"],
      ["B4","R4","Q2","R3","R3","M2","RE"],
      ["B3","R2","Q1","RE","R1","RE","RD"]
   ],
   advancedMarathon: [
      ["B3","B3","Q2","R1","B1","M1","RE"],
      ["B5","B4","Q3","R2","B2","M3","RE"],
      ["B6","B5","Q4","R3","B2","M5","RE"],
      ["B6","B5","Q4","R3","B2","M1","RE"],
      ["B6","B5","Q4","R3","B2","M6","RE"],
      ["B3","B3","Q5","R3","B1","L1","RE"],
      ["B6","B5","S1","R4","B2","L3","RE"],
      ["B7","B6","S3","R4","B3","M5","R4"],
      ["B7","B6","S3","R4","B3","L5","R4"],
      ["B7","B6","S3","R4","B3","L7","R4"],
      ["B8","B6","S4","R4","B3","L9","R4"],
      ["B9","B7","S5","R4","B4","F1","R4"],
      ["B9","B7","S5","R4","B4","F3","R4"],
      ["B9","B7","S5","R4","B4","L9","R4"],
      ["B9","B7","S5","R4","B4","F4","R4"],
      ["B9","B7","S5","R4","B4","F5","R4"],
      ["B5","R4","Q2","R3","R3","M4","R2"],
      ["B3","R2","Q1","R1","R1","RE","RD"]
   ],
};
  
export const runTypes = {
   recovery: {
      1: [{Zone: 1, Time: 15}],
      2: [{Zone: 1, Time: 20}],
      3: [{Zone: 1, Time: 25}],
      4: [{Zone: 1, Time: 30}],
      5: [{Zone: 1, Time: 35}],
      6: [{Zone: 1, Time: 40}],
      7: [{Zone: 1, Time: 45}],
      8: [{Zone: 1, Time: 50}],
      9: [{Zone: 1, Time: 55}],
   },
   base: {
      1: [{Zone: 1, Time: 5},{Zone: 2, Time: 10},{Zone: 1, Time: 5}],
      2: [{Zone: 1, Time: 5},{Zone: 2, Time: 15},{Zone: 1, Time: 5}],
      3: [{Zone: 1, Time: 5},{Zone: 2, Time: 20},{Zone: 1, Time: 5}],
      4: [{Zone: 1, Time: 5},{Zone: 2, Time: 25},{Zone: 1, Time: 5}],
      5: [{Zone: 1, Time: 5},{Zone: 2, Time: 30},{Zone: 1, Time: 5}],
      6: [{Zone: 1, Time: 5},{Zone: 2, Time: 35},{Zone: 1, Time: 5}],
      7: [{Zone: 1, Time: 5},{Zone: 2, Time: 40},{Zone: 1, Time: 5}],
      8: [{Zone: 1, Time: 5},{Zone: 2, Time: 45},{Zone: 1, Time: 5}],
      9: [{Zone: 1, Time: 5},{Zone: 2, Time: 50},{Zone: 1, Time: 5}],
   },
   quickInterval: {
      1: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 3, Zone: [4,1], Time: [1,2]},{Zone: 1, Time: 5}],
      2: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 4, Zone: [4,1], Time: [1,2]},{Zone: 1, Time: 5}],
      3: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 5, Zone: [4,1], Time: [1,2]},{Zone: 1, Time: 5}],
      4: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 4, Zone: [4,1], Time: [2,2]},{Zone: 1, Time: 5}],
      5: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 5, Zone: [4,1], Time: [2,2]},{Zone: 1, Time: 5}],
      6: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 6, Zone: [4,1], Time: [2,2]},{Zone: 1, Time: 5}],
      7: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 7, Zone: [4,1], Time: [2,2]},{Zone: 1, Time: 5}],
      8: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 8, Zone: [4,1], Time: [2,2]},{Zone: 1, Time: 5}],
      9: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 9, Zone: [4,1], Time: [2,2]},{Zone: 1, Time: 5}],
   },
   sprintInterval: {
      1: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 6, Zone: [5,1], Time: [0.5,1.5]},{Zone: 1, Time: 5}],
      2: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 8, Zone: [5,1], Time: [0.5,1.5]},{Zone: 1, Time: 5}],
      3: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 10, Zone: [5,1], Time: [0.5,1.5]},{Zone: 1, Time: 5}],
      4: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 6, Zone: [5,1], Time: [1,2]},{Zone: 1, Time: 5}],
      5: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 8, Zone: [5,1], Time: [1,2]},{Zone: 1, Time: 5}],
      6: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 10, Zone: [5,1], Time: [1,2]},{Zone: 1, Time: 5}],
      7: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 12, Zone: [5,1], Time: [1,2]},{Zone: 1, Time: 5}],
      8: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 8, Zone: [5,1], Time: [1.5,2.5]},{Zone: 1, Time: 5}],
      9: [{Zone: 1, Time: 5},{Zone: 2, Time: 5},{Repeat: 10, Zone: [5,1], Time: [1.5,2.5]},{Zone: 1, Time: 5}],
   },
   endQuick: {
      1: [{Zone: 1, Time: 5},{Zone: 2, Time: 10},{Zone: 3, Time: 5}],
      2: [{Zone: 1, Time: 5},{Zone: 2, Time: 15},{Zone: 3, Time: 5}],
      3: [{Zone: 1, Time: 5},{Zone: 2, Time: 15},{Zone: 3, Time: 10}],
      4: [{Zone: 1, Time: 5},{Zone: 2, Time: 20},{Zone: 3, Time: 10}],
      5: [{Zone: 1, Time: 5},{Zone: 2, Time: 25},{Zone: 3, Time: 10}],
      6: [{Zone: 1, Time: 5},{Zone: 2, Time: 30},{Zone: 3, Time: 10}],
      7: [{Zone: 1, Time: 5},{Zone: 2, Time: 30},{Zone: 3, Time: 15}],
      8: [{Zone: 1, Time: 5},{Zone: 2, Time: 35},{Zone: 3, Time: 15}],
      9: [{Zone: 1, Time: 5},{Zone: 2, Time: 40},{Zone: 3, Time: 15}],
   },
   mediumDistance: {
      1: [{Zone: 1, Distance: 0.5},{Zone: 2, Distance: 5},{Zone: 1, Distance: 0.5}],
      2: [{Zone: 1, Distance: 0.5},{Zone: 2, Distance: 6},{Zone: 1, Distance: 0.5}],
      3: [{Zone: 1, Distance: 0.5},{Zone: 2, Distance: 7},{Zone: 1, Distance: 0.5}],
      4: [{Zone: 1, Distance: 0.5},{Zone: 2, Distance: 8},{Zone: 1, Distance: 0.5}],
      5: [{Zone: 1, Distance: 0.5},{Zone: 2, Distance: 9},{Zone: 1, Distance: 0.5}],
      6: [{Zone: 1, Distance: 0.5},{Zone: 2, Distance: 10},{Zone: 1, Distance: 0.5}],
   },
   longDistance: {
      1: [{Zone: 1, Distance: 0.5},{Zone: 2, Distance: 11},{Zone: 1, Distance: 0.5}],
      2: [{Zone: 1, Distance: 0.5},{Zone: 2, Distance: 12},{Zone: 1, Distance: 0.5}],
      3: [{Zone: 1, Distance: 0.5},{Zone: 2, Distance: 13},{Zone: 1, Distance: 0.5}],
      4: [{Zone: 1, Distance: 0.5},{Zone: 2, Distance: 14},{Zone: 1, Distance: 0.5}],
      5: [{Zone: 1, Distance: 0.5},{Zone: 2, Distance: 15},{Zone: 1, Distance: 0.5}],
      6: [{Zone: 1, Distance: 0.5},{Zone: 2, Distance: 16},{Zone: 1, Distance: 0.5}],
      7: [{Zone: 1, Distance: 0.5},{Zone: 2, Distance: 17},{Zone: 1, Distance: 0.5}],
      8: [{Zone: 1, Distance: 0.5},{Zone: 2, Distance: 18},{Zone: 1, Distance: 0.5}],
      9: [{Zone: 1, Distance: 0.5},{Zone: 2, Distance: 19},{Zone: 1, Distance: 0.5}],
   },  
   fastLongRun: {
      1: [{Zone: 1, Distance: 0.5},{Repeat: 9, Zone: [3,2], Distance: [0.25,0.75]},{Zone: 1, Distance: 0.5}],
      2: [{Zone: 1, Distance: 0.5},{Repeat: 11, Zone: [3,2], Distance: [0.25,0.75]},{Zone: 1, Distance: 0.5}],
      3: [{Zone: 1, Distance: 0.5},{Repeat: 13, Zone: [3,2], Distance: [0.25,0.75]},{Zone: 1, Distance: 0.5}],
      4: [{Zone: 1, Distance: 0.5},{Repeat: 15, Zone: [3,2], Distance: [0.25,0.75]},{Zone: 1, Distance: 0.5}],
      5: [{Zone: 1, Distance: 0.5},{Repeat: 17, Zone: [3,2], Distance: [0.25,0.75]},{Zone: 1, Distance: 0.5}],
      6: [{Zone: 1, Distance: 0.5},{Repeat: 19, Zone: [3,2], Distance: [0.25,0.75]},{Zone: 1, Distance: 0.5}],
   },  
};