// 2798. Number of Employees Who Met the Target
//-------------------------------------------------

function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
    let c = 0
    for(let i = 0; i < hours.length; i++){
        if(hours[i] >= target) c++
    }
    return c
};