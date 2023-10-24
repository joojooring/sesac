select * from customer;
-- custid 가 bunny인 회원
select * from customer where custid = 'bunny';
-- custid 가 bunny가 아닌 회원
select * from customer where custid != 'bunny';
select * from customer where not custid = 'bunny';
-- 2000-01-01 이후에 태어난 회원 조회
select * from customer where birth >= '2000-01-01';
-- 2000-01-01 ~ 2005-01-01 사이에 태어난 회원 조회
select * from customer where birth between '2000-01-01' and '2005-01-01';
-- addr 가 대한민국 서울, 미국 로스앤젤레스 둘 중 하나라면 조회
select * from customer where addr in ('대한민국 서울', '미국 로스앤젤레스');
-- addr가 대한민국을 포함한 회원 조회 (like 이용)
select * from customer where addr like '%대한민국%';
select * from customer where custname like '__수';
select * from customer where custname like '%해_';
-- is null 사용 예시 
select * from customer where custname is null;

-- and , or, not --
select * from customer where addr like '%대한민국%' AND birth <= '2000-05-05';
select * from customer where addr like '%대한민국%' or birth <= '2000-05-05';

select * from customer ORDER BY custname ASC;
select * from customer where addr like '%대한민국%' ORDER BY custname DESC;

-- 가장 위에 있는 값만 가져오겠다.
select * from customer where addr like '%대한민국%' ORDER BY custname DESC LIMIT 1;


-- < selet문 심화 >
-- customer 테이블에 존재하는 addr의 종류를 알고 싶다.
select distinct addr from customer;

-- orders 테이블에 존재하는 주문 개수 
select count(*) as 'total_orders' from orders;

-- 사람별 주문 건수
-- select에서 group by를 쓸 때, group by뒤에 쓴 속성과 집계함수로 새로 만든 속성만 출력. (다른 prodname 등등의 속성은 출력 X)
select custid, count(*) as 'count' from orders group by custid;

-- 사람별로 구매한 상품의 개수
select * from orders;
select custid, sum(amount) as 'total_amount' from orders group by custid;

-- 사람별로 구매한 상품의 개수 조회하는데, 구매한 상품의 개수가 5개 이상인 경우만 조회 (custid != 'bunny'인 사람)
select custid, sum(amount) as 'total_amount' from orders 
where custid != 'bunny' 
group by custid 
having sum(amount) >= 5;

-- 사람별로 결제한 금액
select custid, sum(amount*price) as 'total_price' from orders group by custid;

-- customer, orders을 inner join > 주문별로 배송지를 알고 싶어서
select customer.addr, orders.* from customer inner join orders on customer.custid = orders.custid;