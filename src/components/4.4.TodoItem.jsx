function TodoItem(props) {
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    function handleDelete(removeid) {
        var temparray = activityArr.filter(function (item) {
            if (item.id === removeid) {
                return (false)
            }
            else {
                return (true)
            }
        })
        setactivityArr(temparray)
    }
    return (
        <>
            <div className="flex justify-between">
                <p>{props.index + 1}.{props.activity}</p>
                <button className=" text-red-600 font-medium" onClick={() => { handleDelete(props.id) }}><i class="fa-solid fa-trash" style={{color: "#fb1313"}}></i></button>
            </div>
        </>
    )
}
export default TodoItem