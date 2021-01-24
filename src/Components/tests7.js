const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

let entry = [];

rl.on('line', function (data) {
    entry.push(data);
});

let data = entry;
rl.on('close', ()=>{
   const n = parseInt(data[0]);
   const line2 = data[1].split(' ');

   const a = parseInt(line2[0]);
   const b = parseInt(line2[1]);
   const c = parseInt(line2[2]);

    let counter=0;
    let mass = a.toString()+b.toString()+c.toString();
    mass.toString().split('');
    let min = a;
    if (min>b) {
        min=b;
    }
    if (min>c) {
        min=c;
    }
    let bool=[];
    for (let i = 0; i < (n-1)/min; i++) {
        for (let j = 0; j < (n-1)/min; j++) {
            for (let k = 0; k < (n-1)/min;k++) {
                if (i*a+j*b+k*c<=n-1) {
                    bool[i*a+j*b+k*c+1]=true;
                }
            }
        }
    }
    for (let i=1; i<=n; i++) {
        if (bool[i]==true) {
            counter++;
        }
    }

    process.stdout.write(counter.toString());
    process.stdout.write('\n');
    process.exit(0);
});