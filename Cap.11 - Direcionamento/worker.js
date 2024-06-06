const { parentPort } = require('worker_threads');

parentPort.on('message', (data) => {
    const { start, end, array } = data;
    let sum = 0;
    for (let i = start; i < end; i++) {
        sum += array[i];
    }
    parentPort.postMessage(sum);
});
