import { Link} from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props) 
{
    const user = props.user
    const setuser = props.setuser
    const navigate = useNavigate()

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

    function addUser()
    {
        setuser([...user,{username:eusername,password:euserpass}])
        navigate("/")

    }

    return (
        <div className=" bg-black p-10">
            <div className=" bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className=" text-3xl font-medium">Hey Hi</h1>
                <p>I help you manage your activities after you login : )</p>

                <div className=" flex flex-col gap-2 my-2">
                    <input type="text"
                        className="w-52 border-black p-1 bg-transprent border rounded-md"
                        placeholder="Username" value={eusername} onChange={handleUinput} />

                    <input type="text"
                        className="w-52 border-black p-1 bg-transprent border rounded-md"
                        placeholder="Password" value={euserpass} onChange={handlePinput} />

                    <input type="text"
                        className="w-52 border-black p-1 bg-transprent border rounded-md"
                        placeholder="Confirm Password" />

                        <button className="bg-[#FCA201] w-24 p-1 border rounded-md font-medium" onClick={addUser}>Signup</button>

                        <p>Already have an account? <Link to={"/"} className=" underline">Login</Link> </p>

                </div>
            </div>
        </div>
    )
}

export default Signup