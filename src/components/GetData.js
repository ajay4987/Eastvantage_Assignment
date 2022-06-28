import {useState,useEffect} from 'react'
import axios from 'axios';
import "./style.css"

const data1 = []

export default function GetData() {
  const [data,setData] = useState([])
  const fetchData  = async () =>{
      const temp = await axios.get('https://randomuser.me/api');
      const respond = temp.data.results
      const storage = {
        name: respond[0].name.title+" "+respond[0].name.first+" "+respond[0].name.last,
        email: respond[0].email
      }
      data1.push(storage)
      localStorage.setItem("item", JSON.stringify(data1))
      setData([...data1])
  }  
  
  useEffect(()=>{
//    fetchData();
  },[])

  
  return (
    <div className="App">
    <table>
        <thead>
            <tr>
                <th>Full Name</th>
                <th>Email</th>
            </tr>
        </thead>
        {data.map((val,index)=>(
        <tr key={index}>
         <td>{val.name}</td>
          <td>{val.email}</td>
        </tr>
      ))}
      </table>
      <button onClick={fetchData}>Refresh</button>
    </div>
  );
}
