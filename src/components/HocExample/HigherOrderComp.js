import React, {useState, useEffect} from 'react'
import axios from "axios";


const HigherOrderComp = (WrappedComp, entity) => {


    const [data, setData] = useState([]);
    const [term, setTerm] = useState("");

    useEffect(() => {
        const fetchData = async () => {
          const response = await axios.get(
            `https://jsonplaceholder.typicode.com/${entity}`
          );
          console.log(response.data);
          setData(response.data);
        };
        fetchData();
      }, [entity]);



      let filteredData = data.slice(0, 10).filter(user => {
        if(entity === "users"){
            const {name } = user;
           return name.indexOf(term) >= 0;
        }
        if(entity === "todos"){
            const {title}= user;
            return title.indexOf(term) >= 0;
        }
      })
 
    

  return (
    <div>
    <h2>{entity}</h2>
    <input type="text" value={term} onChange={(e)=>setTerm(e.target.value)}/>
    <WrappedComp data={filteredData}/>
    </div>
  )
}

export default HigherOrderComp;