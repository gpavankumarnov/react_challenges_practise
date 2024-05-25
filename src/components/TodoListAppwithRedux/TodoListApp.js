import React, { useRef, useState } from "react";
import { addTask, deleteTask, updateTask } from "./Redux/Actions/Actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
const TodoListApp = () => {

   const [editVal, setEditVal] = useState({
    editBtnInd: -1,
     editedTask: "",
     editId:0
   })


  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const tasks = useSelector((state) => state?.taskList);
  const taskser = useSelector((state) => state);
  console.log("tasks", tasks, taskser);
  const handleCreate = () => {
    const newTask = {
      taskName: inputRef.current.value,
      id: uuidv4(),
    };
inputRef.current.value = ""
    dispatch(addTask(newTask));
  };


  const handleRemove = (id) => {
         dispatch(deleteTask(id))
  }

  const handleEdit = (task, index,e) => {
       console.log(e.target.value)
       setEditVal({...editVal, editBtnInd:index, editedTask:e.target.value, editId:task.id  })
       
  }
  

  const handleUpdate = () => {
    dispatch(updateTask(editVal))
  }



  return (
    <div>
      <h2>Todo Task</h2>
      <section>
        <div>
          <label for="taskName"> Task Name</label>
          <input type="text" placeholder="task" ref={inputRef} />
          <button onClick={handleCreate}>Create</button>
        </div>
      </section>

      {tasks &&
        tasks.map((task, index) => (
          <div>
           { index === editVal.editBtnInd ? <input type="text" onChange={handleEdit} /> : <div>{task.taskName}</div>}
          {editVal.editBtnInd === index && <button onClick={handleUpdate}>update</button>}
            <button onClick={() => handleEdit(task,index)}>edit</button>
            <button onClick={()=>handleRemove(task.id)}>remove</button>
          
          </div>
        ))}

      <div></div>
    </div>
  );
};

export default TodoListApp;
