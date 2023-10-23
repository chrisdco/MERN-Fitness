import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from '../hooks/useAuthContext'
import '../css/list.css'
const predefined = [
    {
      title: "Bench Press",
      load: 50,
      reps: 10,
      image: "https://plus.unsplash.com/premium_photo-1682094035772-a5ccdb07d9b0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Bulgarian Split Squat",
      load: 20,
      reps: 10,
      image: "https://image.boxrox.com/2021/09/bulgarian-split-squat-how-to.png",
    },
    {
      title: "Deadlift",
      load: 100,
      reps: 8,
      image: "https://images.unsplash.com/photo-1534368270820-9de3d8053204?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // {
    //   title: "Push-Up",
    //   load: 0,
    //   reps: 25,
    //   image: "https://images.unsplash.com/photo-1566351566999-d975d35c3325?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   title: "Squat",
    //   load: 40,
    //   reps: 12,
    //   image: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // Add more exercises as needed
  ];

const ExerciseList = ({ onSelectExercise }) => {
    const { dispatch } = useWorkoutsContext()
    const { user } = useAuthContext()
  
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleAddPredefinedExercise = async (exercise) => {
        if (!user) {
        setError('You must be logged in');
        return;
        }

        const response = await fetch('/api/workouts', {
        method: 'POST',
        body: JSON.stringify(exercise),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        }
        });

        const json = await response.json();

        if (!response.ok) {
        setError(json.error);
        setEmptyFields(json.emptyFields);
        }
        if (response.ok) {
        setTitle('');
        setLoad('');
        setReps('');
        setError(null);
        setEmptyFields([]);
        dispatch({ type: 'CREATE_WORKOUT', payload: json });
        }
    }
  return (
    <div class="card_spec">
      <div class="card__container">
        {predefined.map((exercise, index) => (
          <article class="card__article" key={index}>
            <div class="card__data">
              <img src={exercise.image} alt="card image" class="card__img" />
              <h1 class="card__title">{exercise.title}</h1>
              <p class="card__description">
                Load: {exercise.load}, Reps: {exercise.reps}
              </p>
              <button onClick={() => handleAddPredefinedExercise(exercise)}>
                <span class="material-symbols-outlined">add_box</span>
              </button>
            </div>

            <div class="card__shapes">
              {/* Add the card shapes here */}
              <span class="card__shape"></span>
              <span class="card__shape"></span>
              <span class="card__shape"></span>
              <span class="card__shape"></span>
              <span class="card__shape"></span>
              <span class="card__shape"></span>
              <span class="card__shape"></span>
              <span class="card__shape"></span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;
