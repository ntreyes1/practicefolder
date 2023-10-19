import mysql from 'mysql2'


const pool = mysql.createPool({
    host : 'u6354r3es4optspf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user : 'x7vvsgcy5o49sq0l',
    password : 'pwjpg34y3t7dbox5',
    database : 'gdxrv40koc8k9tio',
    port : 3306
}).promise()

export async function getExercises() {
    const [rows] = await pool.query("SELECT * FROM exercises")
    return rows
}

export async function getExercisesid(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM exercises
    WHERE id = ?
    `, [id])
    return rows[0]
}

const exercises = await getExercises()
console.log(exercises)

export async function createExercise(name, distance, date) {
    const result = await pool.query(`
    INSERT INTO exercises (name, distance, date)
    VALUES (?, ?, ?)
    `, [name, distance, date])
}

const result = await createExercise('Stairmaster', '3.2', '2023-08-11')
console.log(result)