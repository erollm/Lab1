import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const UserContext = createContext();


export const UserProvider = ({children}) => {
      const initialValues = {
        firstname: "",
        lastname : "",
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
      };

      const [createValues, setCreateValues] = useState(initialValues);
      const [users, setUsers] = useState([]);
      const [errors, setErrors] = useState({});
      const navigate = useNavigate();
    
      const getUsers = async() =>{
        const apiUsers = await axios.get("/api/v1/users");
        setUsers(apiUsers.data.data);
    };
    
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setCreateValues({ ...createValues, [name]: value });
    };

    
    const deleteUser = async (id) =>{
      await axios.delete("/api/v1/users/"+id);
      getUsers();
}

    const storeUser = async(e) =>{
      e.preventDefault();
      try{
          await axios.post("/api/v1/users", createValues);
          setCreateValues(initialValues);
          navigate("/admin/users");
  }
      catch(e){
          if(e.response.status === 422){
              setErrors(e.response.data.errors);
          }
      }
  }

   const updateUser = async (id, data) =>{
            try{ 
                await axios.put("/api/v1/users/"+id, data);
                getUsers();
    }
            catch(e){
                if(e.response.status === 422){
                setErrors(e.response.data.errors);
            }
    }
  }
     
    return <UserContext.Provider value={{users, getUsers, errors, createValues, handleInputChange, storeUser, deleteUser, updateUser}}>{children}</UserContext.Provider>
};

export default UserContext;