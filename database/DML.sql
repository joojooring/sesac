--  update 문 
update customer set custname = '강해란' where custid = 'bunny';
select * from customer;

-- delete
delete from customer where custid = 'wow123';
-- 오류 발생. 이유? wow123 값을 참조하고 있는 데이터가 있어서 삭제할 수 없음.
-- 만약 customer 삭제할 때 참조하고 있는 데이터도 같이 삭제하고 싶다면, foreign key를 걸 때 on delete cascade를 해주면 된다.
-- CREATE TABLE orders 
-- (  orderid   INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
--    custid    CHAR(10) NOT NULL, 
--    prodname  CHAR(6) NOT NULL, 
--    price     INT  NOT NULL, 
--    amount    SMALLINT  NOT NULL,
--    FOREIGN KEY (custid) REFERENCES customer(custid) on delete cascade
-- );

-- 그게 아니라면? foreign key가 걸린 테이블(orders)에서 먼저 custid = 'wow123' 인 것을 삭제하고,
delete from orders where custid = 'wow123';
-- customer 테이블에서 삭제 
delete from customer where custid = 'wow123';