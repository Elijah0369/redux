import { combineReducers } from "redux";
import { taskReducers } from "./taskReducers";

export const rootReducers = combineReducers({taskReducers})