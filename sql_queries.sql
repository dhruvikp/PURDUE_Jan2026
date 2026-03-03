create database employee_db;
show databases;
use employee_db;
drop database test_db;

DROP TABLE  employees;
create table employees (
	emp_id INT PRIMARY KEY,
    emp_name varchar(50) NOT NULL,
    email varchar(100) unique,
    age int check (age>=18),
    salary DECIMAL(10,2) check (salary >0),
    dept_id int,
    satus varchar(20) default 'ACTIVE',
    
    FOREIGN KEY (dept_id) references departments(dept_id)
    );
    
create table departments(
dept_id int primary key,
dept_name varchar(50)
);
    
    
create table orders(
order_id int primary key,
status varchar(20) default 'PLACED',
created_date DATE
);
    
  desc employees;  



create table employee_1(
emp_id int primary key,
emp_name varchar(50),
salary decimal(10,2)
);


ALTER TABLE employee_1
	add age int;
    
 alter table employee_1
 add status varchar(20) default 'active';


alter table employee_1
rename column emp_name to employee_name;

alter table employee_1
drop age;

alter table employee_1
add primary key (emp_id);

alter table employee_1
add unique (employee_name);

alter table employee_1
modify employee_name varchar(50) not null;

drop table employee_1;

-- -------------------------------------------
 -- 02/26/2026
-- ----------------------
Create table employees_1 (
	emp_id int primary key,
    emp_name varchar(50),
    salary decimal(10,2),
    department varchar(30)
);

-- SELECT COL_LIST FROM TABLE_NAME
select * from employees_1;

-- select specific columns
	select emp_name, salary from employees_1;
    
-- select with where condition
	select * from employees_1 where department='IT';
    
-- select  with order by 
	select * from employees_1 order by salary asc;
-- select with limit
	select * from employees_1 limit 2;
    

-- INSERT - INSERT INTO table_name VALUES (value1, value2...)
insert into employees_1 (emp_id, emp_name, salary, department) values (1, 'Raj', 50000, 'IT');
-- INSERT MULTIPLE ROWS
insert into employees_1 (emp_id, emp_name, salary, department) values (2, 'Anvita', 60000, 'HR'), (3, 'Dhruvik', 55000, 'Finance');


-- UPDATE table_name set column = value where condition;
update employees_1 
set salary = 65000
where emp_id = 2;

-- UPDATE with multiple columns
update employees_1 
SET salary = 70000, department = 'IT'
where emp_id = 3;


-- UPDATE Multiple rows
update employees_1
set salary = salary + 5000
where department = 'IT';

-- DELETE Statements
delete from employees_1 where emp_id = 4;
delete from employees_1 where department = 'HR';

-- TRUNCATE - REmove all rows

-- DCL statements
	create user 'app_user'@'localhost' IDENTIFIED BY 'Application@2439';
    
-- SHOW VARIABLES LIKE 'validate_password%';
-- set global validate_password_policy = LOW;

	grant select, insert on employee_db.* TO 'app_user'@'localhost';

	# flush privileges;
	
    revoke insert on employee_db.* from  'app_user'@'localhost';
    
    show grants for 'app_user'@'localhost';
    
    drop user 'app_user1'@'localhost';


-- TRANSACTIONS Management

create table accounts (
acc_id int primary key,
acc_holder varchar(50),
balance decimal(10,2)
);

insert into accounts values (1, 'Rahul', 50000), (2, 'Anita', 30000);
select * from accounts;

start transaction;

update accounts set balance = balance -10000 where acc_id = 1;
update accounts set balance = balance+10000 where acc_id = 2;

commit;

start transaction;

update accounts set balance = balance -5000 where acc_id = 1;
update accounts set balance = balance+5000 where acc_id = 2;

rollback;

-- SAVE POINT

start transaction;

update accounts set balance = balance -2000 where acc_id = 1;
savepoint sp1;

update accounts set balance = balance+5000 where acc_id = 2;

rollback to savepoint sp1;

select @@autocommit;

-- select with diffeent conditions
select * from employees_1;

select distinct department from employees_1;

select * from employees_1 where emp_name like 'R%';
select * from employees_1 where emp_name like '%a%';

select emp_name, salary, 
case 
	when salary >= 60000 then 'HIGH SALARY'
    ELSE 'LOW SALARY'
    END AS salary_category
    from employees_1;

select emp_name,
	IF(salary = 55000, 'PERFECT_SALARY', 'NOT_PERFECT') AS emp_status
    FROM employees_1;
    

    select emp_name as employee_name, salary as montly_salary from employees_1;

	select * from employees_1 where salary between 40000 and 70000;
    
    select emp_name, salary  from employees_1 where (department='IT' and salary>50000);
    
-- JOINS
select * from employees;
select * from departments;



INSERT into departments (dept_id, dept_name) values(10,'IT'),(20,'HR'),(30,'Finance'),(40,'Admin');   
INSERT INTO employees (emp_id, emp_name, email, age, salary, dept_id, satus) values
(1, 'Rahul', 'rahul@simplilearn.com', 28, 60000, 10, 'active'),  
(2, 'Anita', 'anita@simplilearn.com', 32, 55000, 20, 'active'),
(3, 'Vijay', 'vijay@simplilearn.com', 26, 45000, 10, 'active'),
(4, 'Neha', 'neha@simplilearn.com', 29, 50000, NULL, 'active'),
(5, 'Amit', 'amit@simplilearn.com', 35, 70000, 30, 'active');

commit;
-- INNER JOIN
SELECT 
	e.emp_id,
    e.emp_name,
    e.email,
    e.salary,
    d.dept_name
	from employees e
    inner join departments d
    on e.dept_id = d.dept_id;


-- LEFT OUTER JOIN
SELECT 
	e.emp_id,
    e.emp_name,
    e.email,
    e.salary,
    d.dept_name
	from employees e
    left join departments d
    on e.dept_id = d.dept_id;


-- RIGHT OUTER JOIN
SELECT 
	e.emp_id,
    e.emp_name,
    e.email,
    e.salary,
    d.dept_name
	from employees e
    right join departments d
    on e.dept_id = d.dept_id;

-- FULL OUTER JOIN (Simulate it with LEFT + RIGHT + UNION)
SELECT 
	e.emp_id,
    e.emp_name,
    e.email,
    e.salary,
    d.dept_name
	from employees e
    left join departments d
    on e.dept_id = d.dept_id
    
UNION

SELECT 
	e.emp_id,
    e.emp_name,
    e.email,
    e.salary,
    d.dept_name
	from employees e
    right join departments d
    on e.dept_id = d.dept_id;

-- CROSS JOIN
select e.emp_name, d.dept_name from employees e cross join departments d;

select * from employees;
select * from departments;

############################### STORED PROCEDURE ######################
-- create SP to add new employee and return total employee count

DELIMITER //
CREATE PROCEDURE add_employee_sp(
	IN p_emp_id INT,
    IN p_emp_name VARCHAR(50),
    IN p_email VARCHAR(100),
    IN p_age INT,
    IN p_salary DECIMAL(10,2),
    IN p_dept_id INT,
    IN p_status VARCHAR(20),
    OUT total_employees INT
)

BEGIN
	-- INSERT new EMPLOYEE IN DB
	insert into employees (emp_id, emp_name, email, age, salary, dept_id, satus)
    VALUES
    (p_emp_id, p_emp_name, p_email, p_age, p_salary, p_dept_id, p_status);
    
	-- GET total employee count
    select count(*) into total_employees from employees;
END //


call add_employee_sp(6, 'Rohit', 'rohit@simplilearn.com', 30, 65000, 10, 'ACTIVE', @emp_count);

select @emp_count as total_employees;

-- ---------
show procedure status;
drop procedure if exists add_employee;


-- Stored procedure salary_summary

DELIMITER //

create procedure salary_summary()
	BEGIN
		SELECT
        count(emp_id) as total_employees,
        sum(salary) as total_salary,
        avg(salary) as average_salary,
        max(salary) as highest_salary,
        min(salary) as lowest_salary
		
        from employees;
    END //

call salary_summary();

-- employee age category

DELIMITER //
create procedure employee_age_category()
	begin
		select
			emp_name,
            age,
            case
				when age<25 then 'Junior'
                when age between 25 and 35 then 'Mid-level'
                else 'Senior'
			END AS age_category
		From employees;
	end //
    
call employee_age_category();
-- ############### VIEW ####################

CREATE  VIEW vw_employee_details AS
	SELECT 
		e.emp_id,
        e.emp_name,
        e.email,
        e.salary,
        e.satus,
        d.dept_name
	FROM employees e
    LEFT JOIN departments d
    on e.dept_id = d.dept_id;

select * from vw_employee_details where emp_name = 'Rahul';

# alter view vw_employee_details as
#Drop view vw_employee_details;

## -------- SUBQUERY ---------------##
-- single -value subquery
select * from employees where dept_id = (select dept_id from departments where dept_name = 'IT');

-- Multi-row subquery
select * from employees where dept_id IN (select dept_id from departments where dept_name IN ('IT','HR'));

-- Correlated subquery
select emp_name, salary, dept_id from employees e where salary > (select avg(salary) from employees where dept_id = e.dept_id)

-- subquery with exist (ex. Ex: Find out departments that have atleast one employee)

select dept_name from departments d
where exists (select 1 from employees e where e.dept_id = d.dept_id);

-- Subquery in SELECT clause (show employee name with department name using subquery)
select emp_name , (select dept_name from departments d where d.dept_id = e.dept_id) AS dept_name 
FROM employees e;

-- ---------------------------------------------------------------------
select * from employees;

DELIMITER //
CREATE TRIGGER before_employee_insert
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
	IF NEW.salary < 0 THEN
		SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Salary cannot be negative';
	END IF;
END //
DELIMITER ;

	INSERT INTO employees (emp_id, emp_name, email, age, salary, dept_id, satus) values
(6, 'Rahul', 'rahul@simplilearn.com', 28, -60000, 10, 'active');


-- empoyee log

CREATE TABLE employee_log (
	log_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_id INT,
    action VARCHAR(20),
    action_time DATETIME
);

DELIMITER //
CREATE TRIGGER after_employee_insert
AFTER INSERT ON employees
FOR EACH ROW
BEGIN
	INSERT INTO employee_log (emp_id, action, action_time)
	VALUES (NEW.emp_id, 'INSERT', NOW());
END //
DELIMITER ;
	INSERT INTO employees (emp_id, emp_name, email, age, salary, dept_id, satus) values
(9, 'Dhruvik', 'dhruvik@simplilearn.com', 28, 60000, 10, 'active');

select * from employee_log;


-- EXERCISE: CERATE BEFORE UPDATE TRIGGER THAT PREVENT SALARY REDUCTION BELOW MINIMUM THRESHOLD
-- NEW.SALARY < OLD.SALARY - 10000 --> SALARY REDUCTION TOO HIGH
SHOW TRIGGERS;

-- --------------------------------
CREATE INDEX idx_emp_dept
ON employees (dept_id);


CREATE INDEX idx_dept_status
		ON employees (dept_id, satus);
CREATE FULLTEXT INDEX idx_emp_name
	ON employees(emp_name);	

SELECT * FROM employees
	where match(emp_name) against('Rahul');

show index from employees;

explain select * from employees where dept_id = 10;


