import { ADD_TASK ,COMPLETE_TASK, EDIT_TASK} from "../constants/actionTypes"

const initialState = {
    tasks : [
        {id: 1, description: "Home", isDone: false},
        {id: 2, description: "Work", isDone: true}
    ]
}

export const taskReducers = (state = initialState, {type, payload}) =>{
switch (type) {
    case ADD_TASK: 
    const newTask = {
        id: Math.random(),
        description: payload,
        isDone: false
    }
    return {
        ...state,
        tasks: [...state.tasks, newTask]
    }
    case COMPLETE_TASK: 
    const toggleTasks = state.tasks.map(task => 
        task.id === payload.id
        ? {...payload, isDone: !payload.isDone}
        : task
)
    return {
        ...state, 
        tasks: toggleTasks
    }

    case EDIT_TASK:
        const editedTasks = state.tasks.map(task => {
            if(task.id === payload.id) {
                return {
                    ...task,
               id : payload.id,
            description : payload.description,
                isDone : payload.isDone
        };} 
            return task ;
        })
        return {
            ...state,
            tasks: editedTasks
        }

    default:
        return state
}
}