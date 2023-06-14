import axios from "../api/axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const csrf = () => axios.get("/sanctum/csrf-cookie");

    const getUser = async () => {
        try{
        const {data} = await axios.get('/api/user')
        setUser(data)
        }
        catch(e){
            console.log(e)
        }
    }
    const login = async ({...data}) =>{
        await csrf()
        try{
            await axios.post('/login', data)
            await getUser()
            navigate("/")
        } catch(e){
            if(e.response.status === 422){
               setErrors(e.response.data.errors)
            }
        }
    }

    const register = async({...data}) =>{
        await csrf()
        try{
            await axios.post('/register', data)
            await getUser()
            navigate("/")
          }catch(e){
            if(e.response.status === 422){
              console.log(e)
              setErrors(e.response.data.errors)
           }
          }
    }   

    const logout = async () => {
        await csrf();
        try {
          await axios.post("/logout");
          setUser(null);
          localStorage.removeItem("user");
        } catch (error) {
          console.error(error.response);
          setErrors(error.response.data.errors);
        }
      };
     useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!user && !storedUser) {
          getUser();
        } else if (user) {
          localStorage.setItem("user", JSON.stringify(user));
        } else {
          setUser(JSON.parse(storedUser));
        }
      }, [user]);

    return <AuthContext.Provider value={{user, errors, getUser, login, register, logout}}>
        {children}
    </AuthContext.Provider>
    }
    
    export default function useAuthContext(){
        return useContext(AuthContext)
    }