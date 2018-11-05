DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (100) NOT NULL,
    department_name VARCHAR (45) NOT NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tooth brush", "hygiene", 7.50, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("broom", "cleaning supplies", 8.50, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("beans", "canned goods", 5.25, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("gum", "checkout items", 1.25, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pickles", "canned goods", 6.25, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("football", "sporting goods", 8.50, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("baseball", "sporting goods", 5.00, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("paddle", "sporting goods", 24.99, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("advil", "pharmacy", 8.50, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tylenol", "pharmacy", 7.99, 15);








