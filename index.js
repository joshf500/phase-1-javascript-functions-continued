// code your solution here
activity=''
function saturdayFun(activity){
    if (activity==undefined){
    return "This Saturday, I want to roller-skate!"
    }
    else{
    return "This Saturday, I want to "+activity+"!"
    }
}
const fn = mondayWork()
function mondayWork(activity) {
    if (activity==undefined){
        return "This Monday, I will go to the office."
        }
         else{
        return "This Monday, I will "+activity+"."
        }
}
fn();


function wrapAdjective(flair){
    return function(part1){
        if (part1==undefined){
            part1=='special'
        }
        if (flair==undefined){
            flair=='*'
        }
        return "You are "+flair+part1+flair+"!"
        }
    }

