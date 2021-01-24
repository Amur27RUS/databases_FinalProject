let numbers = [];

let n = 0;
let k = 0;

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

let entry = [];

rl.on('line', function (data) {
    entry.push(data);
});

let data = entry;

rl.on('close', ()=>{

    let line1 = data[0].split(' ');
    let line2 = data[1].split(' ');

    for(let i = 0; i<line2.length; i++){
        numbers.push(parseInt(line2[i]));
    }

    n = parseInt(line1[0]);
    k = parseInt(line1[1]);

    let firstSum = 0;
    numbers.map(number => firstSum += number);

//Ищем решения, пока у нас есть k попыток:
    for(let i = 0; i<k; i++){
        let min = 9;
        let minIndex = -1;
        let maxDigits = 0;
        let maxDigitsIndex = -1;

        //Находим наилучшее число, чтобы изменить в нём цифру:
        for(let j = 0; j<numbers.length; j++){

            maxDigits = 0;
            maxDigitsIndex = -1;
            //Находим число с макс. кол-вом символов:
            for(let g = 0; g<numbers.length; g++){
                let digits = numbers[g].toString().split('');
                if(digits.length > maxDigits && digits.length > 1){
                    maxDigits = digits.length;
                    maxDigitsIndex = g;
                    if(digits[0] === '9'){
                        maxDigits--;
                    }

                }else if(digits.length === maxDigits && digits.length > 1){
                    for(let l = 0; l<digits.length; l++){
                        let maxDigNumber = numbers[maxDigitsIndex].toString().split('');
                        if(digits[l] < maxDigNumber[l] && maxDigNumber[l] !== '9' && digits[l] !== '9'){
                            maxDigits = digits.length;
                            maxDigitsIndex = g;
                        }else if (digits[l] > maxDigNumber[l] && maxDigNumber[l] !== '9' && digits[l] !== '9'){
                            break;

                        }
                    }
                }
            }

            //Если у нас нет чисел с несколькими цифрами:
            if(maxDigitsIndex === -1) {
                if (numbers[j] < min) {
                    min = numbers[j];
                    minIndex = j;
                }
            }

        }

        //Если есть числа с несколькими цифрами:
        if(maxDigitsIndex !== -1) {
            let digitsFin = numbers[Number(maxDigitsIndex)].toString().split('');
            for(let j = 0; j<digitsFin.length; j++){
                if(digitsFin[j] !== '9'){
                    digitsFin[j] = '9';
                    break;
                }
            }
            let finNumber = '';
            for(let j = 0; j<digitsFin.length; j++){
                finNumber += digitsFin[j];
            }
            numbers[Number(maxDigitsIndex)] = Number(finNumber);
        }

        if(minIndex !== -1){
            numbers[minIndex] = 9;
        }

    }
    let lastSum = 0;
    numbers.map(number => lastSum += number);


    let result = lastSum - firstSum;

    process.stdout.write(result.toString());
    process.stdout.write('\n');
    process.exit(0);

});
