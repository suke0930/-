const express = require('express');
const app = express();
const multer = require("multer");
const fs = require('fs');

const filePath = '/home/suke/html/upload/';

app.post('/file_upload', multer({ dest: filePath }).single('file'), (req, res) => {
    // multerが/tmp/samplefup/配下にファイルを作成

    // req.file.pathでmulterが作成したファイルのパスを取得可能
    const importPath = filePath + req.file.originalname;
    fs.rename(req.file.path, importPath, (err) => {
        if (err) {
            throw err;
        }
        console.log("rename finish!");

    })

    res.end(importPath);
});

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + "/" + "index.html");
});

const server = app.listen(58080, () => {
    console.log("listening at port %s", server.address().port);
});