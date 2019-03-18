/* create user table */
CREATE TABLE IF NOT EXISTS users(
name VARCHAR(20) NOT NULL COMMENT '姓名',
password VARCHART(20) NOT NULL COMMENT '密码',
avator VARCHAR(100) NOT NULL COMMENT '用户头像'
);