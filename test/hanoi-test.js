'use strict'; 
require('source-map-support').install();

import {assert}          from 'chai';
import AssertionError    from 'assertion-error';
assert.isOk(AssertionError);
import           _ from 'lodash';
assert.isOk(_);

import {solveHanoi, steps}  from '../src/hanoi.js';

describe('number of steps', function() {
    it('is right', function() {
        for (let n = 0; n < 15 ; n+=2) {
            var nSteps = 0;
            for (let move of solveHanoi(n))
                nSteps += 1;
            assert.strictEqual(nSteps, steps(n));
        }
    });
});

describe('simple solution with 3 disks', function() {
    it('does not break', function() {
        for (let move of solveHanoi(3, 1, 2, 3)) {
            console.log(JSON.stringify(move));
        }
    });
});

describe('README test', function() {
    it('does not break', function() {
        const n = 3;
        console.log(`For ${n} disks ${steps(n)} steps are required.`);
        console.log('The solution is as follows:');
        for (let move of solveHanoi(n)) {
            console.log(JSON.stringify(move));
        }
    });
});

describe('verify call stack exceeded limit', function() {
    it('works', function() {
        let stackLimitEncountered = false;
        for (let n = 0; n < Number.MAX_VALUE; n+=100) {
            try {
                const mostlyIgnored = solveHanoi(n, 1, 2, 3).next();
                if ( (n/100) % 5 === 0)
                    console.log(`n=${n}; first move is: ${JSON.stringify(mostlyIgnored)}`);
            } catch (e) {
                assert.strictEqual(e.constructor.name, 'RangeError');
                assert.strictEqual(e.message, 'Maximum call stack size exceeded');
                console.log(`maximum call stack exceeded at ${n}`);
                stackLimitEncountered = true;
                break;
            }
        }
        assert.isTrue(stackLimitEncountered
                      , 'impossible! How come I didn\'t encounter a call stack limit?');
    });
});



