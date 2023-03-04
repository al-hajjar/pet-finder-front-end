import { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import loginImage from "../assets/login.png"
import { apiHost } from "../Variables";

const Login = ({loggedIn, setLoggedIn}) => {
    const [loginFormData, setLoginFormData] = useState({username: "", password: ""})
    const navigate = useNavigate()

    useEffect(()=>{
        if(loggedIn){
            navigate('/pets')
        }
    }, [])

    function updateFormData(e){
        setLoginFormData(
            loginFormData => ({
                ...loginFormData,
                [e.target.id]: e.target.value
            })
        )
    }

    function handleForm(e) {
        e.preventDefault();

        fetch(`${apiHost}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginFormData)
        })
        .then(result => {
            if(result.ok){
                result.json().then(data => {
                    localStorage.setItem('loggedIn', true)
                    localStorage.setItem('user', JSON.stringify(data))
                    setLoginFormData({username: "", password: ""})
                    setLoggedIn(true)
                    navigate('/pets')
                })
            }else {
                result.json().then(error => console.warn(error))
            }
        })
    }

    return ( 
        <>
            <div className="flex flex-col justify-center items-center min-h-screen md:mx-16 mx-6">
                <div className="sm:flex justify-center items-center">
                    <div className="md:w-1/2">
                        <img src={loginImage} alt='login-image'/>
                    </div>
                    <div>
                        <h1 className="font-bold uppercase md:text-2xl text-xl text-gray-800">Login</h1>
                        <form onSubmit={handleForm}>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Enter username.." 
                                    class="input-form"
                                    value={loginFormData.username}
                                    onChange={updateFormData} 
                                />
                            </div>
                            <div>
                                <input 
                                    type="password" 
                                    placeholder="Enter password.." 
                                    class="input-form"
                                    value={loginFormData.password}
                                    onChange={updateFormData}  
                                />
                            </div>
                            <button className="btn btn-secondary w-full">
                                Submit
                            </button>
                        </form>
                    <p className="mt-4">
                        Don't have an account? 
                        <Link to='/signup' className="mx-2 text-info font-semibold">Signup</Link>
                    </p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Login;