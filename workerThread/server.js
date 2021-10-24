const express = require('express');
const cluster = require('cluster');
const app = express();
const os = require('os');

const numOfCpu = os.cpus().length;

if(cluster.isMaster){
    console.log(`master ${process.pid} is running`);

    for(let i=0; i<numOfCpu; i++){
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`)
    })
}else{
    app.listen(4000, () => {
        console.log('server is listining on port no 4000');
    })
    console.log(`worker ${process.pid} started`);
}

