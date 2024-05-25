import React from 'react'
import Card from './Card';

export const KanbanBaord = () => {

          let tasks = [
          { name: 'task 0', stage: 0 },
          { name: 'task 1', stage: 0 },
          { name: 'task 2', stage: 0 },
          { name: 'task 3', stage: 0 },
          { name: 'task 4', stage: 1 },
          { name: 'task 5', stage: 1 },
          { name: 'task 6', stage: 1 },
          { name: 'task 7', stage: 2 },
          { name: 'task 8', stage: 2 },
          { name: 'task 9', stage: 3 },
        ]
     
      let stages= ['Backlog', 'To Do', 'Ongoing', 'Done'];
  
  let stageNames=[]

  for (let i = 0; i < stages.length; i++) {
    stageNames.push([])
    
  }

  for (const task of tasks) {
    const stageID = task.stage;
    stageNames[stageID].push(task)
  }



  return (
    <div>
     
   <Card stages={stages} tasks={stageNames}/>

    </div>
  )
}
