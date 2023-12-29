import Header from "../components/2Header"
import Card from "../components/3Card"
import TodoContainer from "../components/4.1.TodoContainer"
import { useLocation } from "react-router-dom"

function Landing()
{
    const data = useLocation()
    return(
        <div className=" bg-black p-16 ">
        <div className=" bg-[#EFEFEF] p-10 border rounded-md">
          {/*Header*/}
          <Header username ={data.state.user}/>
          {/*Card*/}
          <div className="flex justify-between gap-7 my-5 flex-wrap">
            <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
            <Card bgcolor={"#FD6663"} title={"December 26"} subtitle={"13:35"} />
            <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
          </div>
          {/*Todo Container*/}
          <TodoContainer/>
       
        </div>
      </div>
    )
}
export default Landing