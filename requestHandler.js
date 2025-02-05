// 데이터베이스 연결 모듈 불러오기
const mariadb = require('D:/DevCourse-6/3주차/database/connect/mariadb.js')

function main(response) {
    console.log('Response : main');

    // 'product' 테이블에서 모든 데이터 조회 -> 조회된 데이터 출력
    mariadb.query("SELECT * FROM product", function(err, rows) {
        console.log(rows);
    });

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('Main page');
    response.end();
}

function login(response) {
    console.log('Response : login');
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('Login page');
    response.end();
}

let handle = {};            // key:value
handle['/'] = main;
handle['/login'] = login;

exports.handle = handle;