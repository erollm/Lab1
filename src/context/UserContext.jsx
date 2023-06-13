import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
axios.defaults.baseURL = "http://localhost:8000/api/v1/";

const UserContext = createContext();

export const UserProvider = ({children}) => {
      const [users, setUsers] = useState([]);
      const [errors, setErrors] = useState({});
    
      const getUsers = async() =>{
        const apiUsers = await axios.get("users");
        setUsers(apiUsers.data.data);
    };
    
     
    return <UserContext.Provider value={{users, getUsers, errors}}>{children}</UserContext.Provider>
};

export default UserContext;