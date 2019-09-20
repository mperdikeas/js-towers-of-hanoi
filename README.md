[comment1]: <> (to generate HTML out of this file use:       )
[comment2]: <> ($pandoc README.md -s -o foo.html             )

# Towers of Hanoi

A JavaScript library implementing a solution to the Towers of Hanoi problem.


# How to use

    import {solveHanoi, steps}  from 'towers-of-hanoi';

    const n = 3;
    console.log(`For ${n} disks ${steps(n)} steps are required.`);

    console.log('The solution is as follows:');
    for (let move of solveHanoi(n)) {
        console.log(JSON.stringify(move));
    }


