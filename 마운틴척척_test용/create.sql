-- My Place 프로젝트 SQL
-- myplace db 생성
CREATE DATABASE myplace
DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci;

use myplace;

-- table 생성
create table user (
	u_id varchar(8) not null primary key,
    email varchar(30) not null,
    password varchar(20) not null,
    name varchar(10) not null
);

create table gallery (
	g_id int not null primary key auto_increment,
    g_name varchar(20) not null,
    address varchar(50) not null,
    deadline date not null,
    website varchar(30) not null,
    category varchar(10) not null
);

create table comment (
	c_id int not null primary key auto_increment,
    g_id int not null,
    star int not null,
    review varchar(255) not null,
    foreign key (g_id) references gallery(g_id)
);

create table heart(
	h_id int not null primary key auto_increment,
    u_id varchar(8) not null,
    g_id int not null,
    foreign key (u_id) references user(u_id),
    foreign key (g_id) references gallery(g_id)
);

-- 갤러리 테이블 컬럼추가
ALTER TABLE gallery ADD detailaddr varchar(50);

-- 갤러리 기간 타입변경
ALTER TABLE gallery modify deadline varchar(40) not null;

-- 갤러리 테이블 칼럼 g_name varchar크기 변경
ALTER TABLE gallery modify g_name varchar(40) not null;


-- 갤러리 테이블 칼럽 website varchar 크기 변경
ALTER TABLE gallery modify website varchar(100) not null;