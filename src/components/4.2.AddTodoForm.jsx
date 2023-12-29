import { useState } from "react"

function AddTodoForm(props) 
{
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    const [input,setinput] = useState("")

    function handleInput(event)
    {
        setinput(event.target.value)   
    }

    function handleAdd()
    {
        setactivityArr([...activityArr,{id:activityArr.length+1,activity:input}])
        setinput("")
    }
    return (
        <>
            <div className="flex flex-col gap-3">
                <h1 className=" text-2xl font-medium">Manage Activities</h1>
                <div>
                    <input value={input} onChange={handleInput} type="text" className=" border border-black bg-transparent p-1" placeholder="Next Activity ?"></input>
                    <button onClick={handleAdd} className=" bg-black text-white p-1 border border-black">Add</button>
                </div>
            </div>
        </>
    )
}
export default AddTodoForm