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
      } 

      const [createValues, setCreateValues] = useState(initialValues);
      const [user, setUser] = useState([]);
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

  /*const getUser = async (id) => {
    const response = await axios.get("skills/"+id);
    const apiSkill = response.data.data;
    setUser(apiSkill);
    setFormValues({
        name: apiSkill.name,
        slug: apiSkill.slug
    })
};

  const updateUser = async (event) =>{
    event.preventDefault();
    let id = skill.id;
    try{ 
        await axios.put("skills/"+id, formValues);
        getSkills();
        navigate("/skills");
    }
    catch(e){
        if(e.response.status === 422){
            setErrors(e.response.data.errors);
        }
    }
}*/
     
    return <UserContext.Provider value={{users, getUsers, errors, createValues, handleInputChange, storeUser, deleteUser}}>{children}</UserContext.Provider>
};

export default UserContext;