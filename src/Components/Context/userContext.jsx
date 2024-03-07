import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserContext = createContext({
  data: [],
  setData: () => {},
  getUser : () => {},
  handleAdd : () => {},
  handleDelete : () => {},
  handleUpdate : () => {},
});

const API = "https://jsonplaceholder.typicode.com/users";
export const useUserContext = () => useContext(UserContext);

export function UserContextProvider({ children }) {
  const navigate = useNavigate();
  let [data, setData] = useState([]);
  let [viewUser,setViewUser] = useState();

  

  const handleAdd = (newData) => {
    setData((prevData) => [...prevData, newData]);
    navigate("/users");
  };

  const getUser = (id)=>{
    if (data && data.length > 0) {
      const foundUser =  data.find((user) => user.id === parseInt(id));
      setViewUser(foundUser || null);
    }
  };

  const handleUpdate = (id, updatedData) => {
    console.log(updatedData);
    axios
      .put(`${API}/${id}`, updatedData)
      .then((response) => {
        const updatedUser = response.data;
        console.log(updatedUser);
        setData((prevData) =>
        prevData.map((user) => (user.id === updatedUser.id ? updatedUser : user))
        );
      })
      .catch((error) => {
        console.error("Error While Deleting", error);
      });
  };
  const handleDelete = (id)=> {
    axios.delete(`${API}/${id}`).then(()=>{
      setData((prevData) =>{
        return prevData.filter((user) => (user.id !== id));
      })
    })
    .catch((error) => {"Error While Deleting",error});
  };
  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
useEffect(()=>{
  console.log(data);
},[data]);
 
  const value = {
    data,
    viewUser,
    handleAdd,
    getUser,
    handleUpdate,
    handleDelete,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
