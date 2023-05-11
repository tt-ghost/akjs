/**
 * DBUtil 数据库操作类
 */
import mysql from "mysql";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import db from "../config/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pool = mysql.createPool(db);

export default class DBUtil {
  constructor() {
    this.pool = pool;
  }

  /**
   * sql查询核心方法
   * @param {string} sql 待执行的sql字符串
   * @param {object||array||null} values 查询参数
   */
  query(sql, values = []) {
    return new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if (err) {
          reject(err);
        } else {
          connection.query(sql, values, (queryError, rows) => {
            if (queryError) {
              reject(queryError);
            } else {
              // 转换 RowDataPacket 为 json
              resolve(JSON.parse(JSON.stringify(rows)));
            }
            connection.release();
          });
        }
      });
    });
  }

  /**
   * 执行sql文件
   * @param {string} file sql 文件路径
   */
  execSQLFile(file) {
    const sql = fs.readFileSync(file, "utf8");
    return this.query(sql, null);
  }

  /**
   * 初始化数据库
   * @param {array} files 待执行的sql文件名列表，不含 .sql 扩展
   */
  $initDB(files) {
    if (Array.isArray(files)) {
      files.forEach((file) => {
        const sql = path.resolve(__dirname, "../sql", `${file}.sql`);
        this.execSQLFile(sql);
      });
    }
  }
}

// export default DBUtil;
