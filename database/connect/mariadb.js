// MySQL 모듈을 불러옴
const mariadb = require('mysql');

// 데이터베이스 연결 객체 생성
const conn = mariadb.createConnection(
    {
        host: 'localhost',    // 데이터베이스 서버 주소
        port: 3306,           // 기본 포트 번호
        user: 'root',         // 데이터베이스 사용자 계정
        password: 'root',     // 사용자 계정 비밀번호
        database: 'Tennis'    // 연결할 데이터베이스
    }
);

// 데이터베이스 연결 객체를 외부에서 사용할 수 있도록 내보냄
module.exports = conn;