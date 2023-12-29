import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) 
{
    const [eusername,setusername] = useState()
    function handleUinput(event)
    {
        setusername(event.target.value)
    }

    const [euserpass,setuserpass] = useState()
    function handlePinput(event)
    {
        setuserpass(event.target.value)
    }

    const [ruser,setruser] = useState(true)

    const user = props.user 

    const navigate = useNavigate()
          
        function checkUser()
        {
            var userfound = false

            user.forEach(function(item){
                if(item.username === eusername && item.password === euserpass)
                {
                    console.log("Login Successful")
                    userfound = true
                    navigate("/landing",{state:{user:eusername}})

                }
            })
            if(userfound === false)
            {
                console.log("Login Failed")
                setruser(false)
            }

        }
    return (
        <div className=" bg-black p-10 ">
            <div className=" bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className=" text-3xl font-medium">Hey Hi</h1>
                {ruser? <p>I help you to manage your activites after you login : )</p> : <p className=" text-red-500">Please signup before Login</p> }
                
                <div className="flex flex-col gap-2 my-2">
                    <input type="text"
                        className=" w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Username" value={eusername} onChange={handleUinput}/>

                    <input type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Password" value={euserpass} onChange={handlePinput} />

                    <button className="bg-[#8272DA] w-24 p-1 border rounded-md font-medium" onClick={checkUser}>Login</button>

                    <p>Don't have an account? <Link to={"/signup"} className=" underline">Signup</Link></p>
                </div>

            </div>

        </div>
    )
}

export default Login