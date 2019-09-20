'use strict';


function* solveHanoi(n) {

    function* _solveHanoi(n, from, stage, to) {
        if (n>0) {
            yield* _solveHanoi(n-1, from, to, stage);
            yield {from: from, to: to};
            yield* _solveHanoi(n-1, stage, from, to);
        }
    }

    yield* _solveHanoi(n, 1, 2, 3);
}



function steps(n) {
    return Math.pow(2, n)-1;
}

const n = 3;
console.log(`For ${n} disks ${steps(n)} steps are required.`);
console.log('The solution is as follows:');
for (let move of solveHanoi(n)) {
    console.log(JSON.stringify(move));
}


exports.solveHanoi = solveHanoi;
exports.steps = steps;

