import express from 'express'
import cors from 'cors'

import {getExercises, getExercisesid, createExercise } from './database.js'

//app.use(express.json())

const app = express()

app.use(cors());

app.get("/exercises", async (req, res) => {
    const exercises = await getExercises()
    res.send (exercises)
})

app.get("/exercises/:id", async (req, res) => {
    const id = req.params.id
    const exercises = await getExercisesid(id)
    res.send (exercises)
})

app.post("/exercises", async (req, res) => {
    const {name, distance, date} = req.body
    const exercise = await createExercise(name, distance, date)
    res.send(exercise)
})

app.delete("/exercises/:id", async (req, res) => {
    const exerciseId = req.params.id;

    // Add code to delete the exercise from your database using the exerciseId

    try {
        // Perform the deletion operation in your database
        // Example: You can use your existing `deleteExercise` function
        await deleteExercise(exerciseId);

        res.status(204).send(); // Respond with a success status code
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete exercise' });
    }
});


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status (500) . send ('Something broke!')
})

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})