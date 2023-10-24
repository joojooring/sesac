show databases;

-- 데이터 베이스 생성하는 명령어
 CREATE DATABASE sesac_test DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci;

-- 데이터 베이스 선택하는 명령어
use sesac_test;

-- 테이블 생성하는 명령어
CREATE TABLE user(
	id varchar(10) primary key not null,
    password varchar(20) not null,
    age int unsigned 
    );
    
--1. add 만들어진 테이블의 속성(column) 추가
ALTER TABLE user ADD gender enum('여자','남자');

--2. drop column 만들어진 테이블의 속성(column) 삭제
ALTER TABLE user DROP COLUMN age;

--3. modify 만들어진 테이블의 속성(column) 변경
ALTER TABLE user MODIFY gender varchar(2) not null;


-- 테이블을 삭제하는 명령어
DROP TABLE user;

-- 테이블 구조를 확인하는 명령어
desc user;

    -- insert문
INSERT into user (id, password) values ('joojoo', '1234');





select * from user;
select * from user;
    
    -- 테이블을 조회하는 명령어 (데이터베이스가 선택이 되어 있어야 함.)
    show tables;