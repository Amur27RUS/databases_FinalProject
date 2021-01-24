
// const one = parseInt(readline());
// const two = parseInt(readline());

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let input = '';

rl.on('line', (line) => {
    input = line.split(' ');

    const a = parseInt(input[0]);
    const b = parseInt(input[1]);

    let n = a;
    let result=0;
    while (n<=b) {
        let k = n.toString().split('');
        let l = k.length;
        let flag=0;

        if (l>1) {
            for (let i=0; i<l; i++) {
                if (flag==0) {
                    if (i+1!=l) {
                        if (k[i]==k[i+1]) {
                            flag=0;
                        }
                        else flag=1;
                    }
                }
            }
            if (flag == 0) {
                result++;
            }
        }
        else result++;
        n++;
    }
    console.log(result);
    rl.close();
});

