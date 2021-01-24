const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

let entry = [];
let students = [];

rl.on('line', function (data) {
    entry.push(data);
});

let data = entry;

rl.on('close', ()=>{
    let falsePlacesCount = 0; //Кол-во учеников, которые стоят не на своих местах
    let falseElementA = -1; //Первый элемент, который стоит не на своём месте
    let falseElementB = -1; //Второй элемент, который стоит не на своём месте

    let n = parseInt(data[0]);
    let line2 = data[1].split(' ');

    for(let i = 0; i<line2.length; i++){
        students.push(parseInt(line2[i]));
    }

    for(let i = 0; i<n; i++){
        if(falsePlacesCount > 2){
            break;
        }
        if(i === 0){
            if(students[i]%2 === 0){
                falsePlacesCount++;
                if(falseElementA === -1){
                    falseElementA = students[i];
                }else{
                    falseElementB = students[i];
                }
            }
        }else if(students[i]%2 === 0){
            if(i%2 === 0){
                falsePlacesCount++;
                if(falseElementA === -1){
                    falseElementA = students[i];
                }else{
                    falseElementB = students[i];
                }
            }
        }else if(students[i]%2 !== 0){
            if(i%2 !== 0){
                falsePlacesCount++;
                if(falseElementA === -1){
                    falseElementA = students[i];
                }else{
                    falseElementB = students[i];
                }
            }
        }
    }

    if(falsePlacesCount === 2){
        process.stdout.write(falseElementB + ' ' + falseElementA);
        process.stdout.write('\n');
        process.exit(0);
    }else{
        process.stdout.write('-1 -1');
        process.stdout.write('\n');
        process.exit(0);
    }

});