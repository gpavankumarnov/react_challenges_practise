import React from "react";
import HigherOrderComp from "./HigherOrderComp";
import UserListData from "./UserListData";

const TodoList = ({data}) => {

    //Hoc **
//   const [todoList, setTodoList] = useState([]);
//   const [term, setTerm] = useState("");

//   useEffect(() => {
//     const fetchTodos = async () => {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/todos"
//       );
//       console.log(response.data);
//       setTodoList(response.data);
//     };
//     fetchTodos();
//   }, []);


//   let filteredTodos = todoList.slice(0, 10).filter(user => {
//     return user.title.indexOf(term) >= 0;
//   }).map((user) => (
//     <div key={user.id}>
//       <p>
//         <strong>{user.title}</strong>
//       </p>
//     </div>
//   ));

let renderUsers = data.map((user) => (
    <div key={user.id}>
      <p>
        <strong>{user.name}</strong>
      </p>
    </div>
  ));

  return (
    <div>
      
      <div>{renderUsers}</div>
    </div>
  );
};
const SearchTodos = HigherOrderComp(TodoList, "users")
export default SearchTodos;
