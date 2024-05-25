import * as actionFile from '../Actions/ActionTypes'
 //import * as action from '../Actions/Actions'


const initialState = {
    taskList : [],
    activeTask : ""
}

export const taskReducer = (state=initialState,actions )=> {
   
    switch(actions.type){
        case actionFile.Add:
                   
         
          return {
            taskList: [...state.taskList, actions.payload],
            activeTask:actions.payload
          }
        
          case actionFile.Delete:
         let stateCopy = [...state.taskList]
         let activeTaskCopy = state.activeTask
         let filteredArray =   stateCopy.filter(ele => ele.id !== actions.payload)
           
         activeTaskCopy = filteredArray.length > 0 ? stateCopy[0].id : ""

        return {
            taskList: [...filteredArray],
            activeTask: activeTaskCopy
        }

        case actionFile.Update: 
         
        let copiedState = [...state.taskList]
         let editedValIndex = copiedState.findIndex(ele => ele.id === actions.payload.editId);
         console.log(editedValIndex)
           copiedState.splice(editedValIndex, 1, {taskName: actions.payload.editedTask, id:actions.payload.editId})
  
           return {
            taskList:[...copiedState],
            activeTask: actions.payload.editId
           }
            

    }
}