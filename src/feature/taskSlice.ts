import { createSlice } from '@reduxjs/toolkit'

export type Task = {
    id: string,
    name: string,
    priority: string,
    isCompleted: boolean
}

type TState = {
  tasks: Task[]
  currentTask: Task,
  isEditing: boolean
}
// Define the initial state using that type
const initialState: TState = {
  tasks:[],
  currentTask: {
    name: '',
    id: '',
    isCompleted: false,
    priority: 'low'
  },
  isEditing: false
}

export const taskSlice = createSlice({
  name: 'task',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    createTask:(state, action)=>{
      state.tasks.unshift(action.payload)
    },
    removeTask: (state, action) => {
      const id = state.tasks.findIndex(task => task.id === action.payload)
      if (id > -1) {
        state.tasks.splice(id, 1)
      }
    },
    toggleCompleteTask: (state, action) => {
      const id = state.tasks.findIndex(task => task.id === action.payload)
      if (id > -1) {
        state.tasks[id].isCompleted = !state.tasks[id].isCompleted
      }
    },
    setIsEditting: (state, action) => {
      const { isEditing, ...rest } = action.payload
      state.isEditing = action.payload.isEditing
      state.currentTask = rest
    },
    updateTask: (state, action) => {
      const id = state.tasks.findIndex(task => task.id === action.payload.id)
      if (id > -1) {
        state.tasks[id] = {
          ...state.tasks[id],
          ...action.payload
        }
      }
    }
  },
})

export const { createTask, removeTask, toggleCompleteTask, setIsEditting, updateTask } = taskSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.task.tasks

export default taskSlice.reducer