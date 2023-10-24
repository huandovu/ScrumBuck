const { createPool
 } = require ('mysql'); 

 const pool = createPool({
    host: "107.180.1.16",
    user: "fall2023team5",
    password: "fall2023team5",
    database: "fall2023team5",
    connectionLimit: 10
 })

 pool.query