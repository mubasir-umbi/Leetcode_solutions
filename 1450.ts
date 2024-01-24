// 1450. Number of Students Doing Homework at a Given Time

function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
    let c = 0
    for(let i = 0; i < startTime.length; i++){
        if( queryTime <= endTime[i] && queryTime  >= startTime[i] ) c++
    }
    return c
};