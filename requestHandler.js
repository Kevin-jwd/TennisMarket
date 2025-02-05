// file sync 모듈 불러오기
const fs = require('fs');
const main_view = fs.readFileSync('./main.html', 'utf-8');

// 데이터베이스 연결 모듈 불러오기
const mariadb = require('D:/DevCourse-6/3주차/database/connect/mariadb.js')

function main(response) {
    console.log('Response : main');

    // 'product' 테이블에서 모든 데이터 조회 -> 조회된 데이터 출력
    mariadb.query("SELECT * FROM product", function(err, rows) {
        console.log(rows);
    });

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write(main_view);
    response.end();
}

function redRacket(response) {
    fs.readFile('./img/redRacket.png', function(err, data) {
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.write(data);
        response.end();
    }) 
}

function blueRacket(response) {
    fs.readFile('./img/blueRacket.png', function(err, data) {
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.write(data);
        response.end();
    }) 
}

function blackRacket(response) {
    fs.readFile('./img/blackRacket.png', function(err, data) {
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.write(data);
        response.end();
    }) 
}

function mainCss(response) {
    fs.readFile('./main.css', function(err, data) {
        response.writeHead(200, {'Content-Type' : 'text/css'}); 
        response.write(data);
        response.end();
    });
}

let handle = {};            // key:value
handle['/'] = main;

/* image directory */
handle['/img/redRacket.png'] = redRacket;
handle['/img/blueRacket.png'] = blueRacket;
handle['/img/blackRacket.png'] = blackRacket;

/* css */
handle['/main.css'] = mainCss;

exports.handle = handle;