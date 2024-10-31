const express = require('express')
const {
  createRoutine,
  getRoutines,
  getRoutine,
  deleteRoutine,
  updateRoutine
} = require('../controllers/routineController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// GET all workouts
router.get('/', getRoutines)

//GET a single workout
router.get('/:id', getRoutine)

// POST a new workout
router.post('/', createRoutine)

// DELETE a workout
router.delete('/:id', deleteRoutine)

// UPDATE a workout
router.patch('/:id', updateRoutine)


module.exports = router
