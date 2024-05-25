import React from "react";
import HigherOrderComp from "./HigherOrderComp";

const UserListData = ({data}) => {
  //Hoc **
  // const [userData, setUserData] = useState([]);
  // const [term, setTerm] = useState("");

  // useEffect(() => {
  //   const getApiData = async () => {
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     console.log(response.data);
  //     setUserData(response.data);
  //   };
  //   getApiData();
  // }, []);


  let renderUsers = data.map((user) => (
    <div key={user.id}>
      <p>
        <strong>{user.name}</strong>
      </p>
    </div>
  ));

  // let filteredUsers = userData.filter(user => {
  //   return user.name.indexOf(term) >= 0;
  // }).map((user) => (
  //   <div key={user.id}>
  //     <p>
  //       <strong>{user.name}</strong>
  //     </p>
  //   </div>
  // ));

  return (
    <div>
    
      <div>{renderUsers}</div>
    </div>
  );
};
const SearchUsers = HigherOrderComp(UserListData, "users")
export default SearchUsers;
