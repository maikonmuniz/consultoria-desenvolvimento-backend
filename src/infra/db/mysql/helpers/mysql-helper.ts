import mysql from 'mysql2'

const mysqlHelper = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'data_base_fake'
        }).promise()

export default mysqlHelper;