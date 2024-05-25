import { createStore } from 'redux';
import {taskReducer} from './reducer/taskReducer'

export const store = createStore(taskReducer)