import AddTodoForm from "./4.2.AddTodoForm"
import TodoList from "./4.3.TodoList"
import { useState } from "react"

function TodoContainer() 
{
    const [activityArr,setactivityArr] = useState([{id:1,activity:"Wake Up at 6.00 AM"}])

    return (
        <div>
            <div className="flex gap-5 flex-wrap">
              <AddTodoForm activityArr={activityArr} setactivityArr={setactivityArr}/>
              <TodoList activityArr={activityArr} setactivityArr={setactivityArr} />
            </div>
        </div>
    )
}
export default TodoContainer