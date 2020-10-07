const os = require('os');

// console.log(os)
console.log('Операционная система: ', os.platform());
console.log('Архитектура процессора: ', os.arch());
console.log('Инфа по процессору: ', os.cpus());
console.log('Свободная память:', os.freemem()/1024);
console.log('Всего памяти: ', os.totalmem()/1024);
console.log('Домашняя директория: ', os.homedir);
console.log('Включён: ', os.uptime())