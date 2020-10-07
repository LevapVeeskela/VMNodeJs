// file system
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if(err){
//         throw err
//     }
//     console.log('Папка уже создана')
// })

// fs.writeFile(filePath, '\nHello NodeJs', err => {
//     if(err){
//         throw err
//     }
//     console.log('Файл создан')

//     fs.appendFile(filePath, '\nHello again!', err => {
//         if(err){
//             throw err
//         }
//         console.log('Файл дополнен')
//     })
// })

fs.readFile(filePath, 'utf-8', (err, content) => {
    if(err){
        throw eer
    }

    console.log(content)

    // const data = Buffer.from(content);
    // console.log(('Content: '), data.toString())
})