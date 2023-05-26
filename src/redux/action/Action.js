

const addData = (task) => {
    // console.log(task , "action")
    return (
        {
            type: "ADD",
            data: task
        }
    )
}
const editItem = (text) => {
    console.log("Editing")
    return {
        type: "EDIT_DATA",
        text:text
    }
}
const setEdit = () => {
    console.log("setEdit")
    return {
        type: "SET_EDIT"
       
    }
}
const setData = (data) => {
    console.log(data, "setitem")
    return {
        type: "SET_DATA",
        data: data
    }
}
const setDelete=(data)=>{
    return {
        type: "DELETE_DATA",
        data: data
    }
}
export { addData, setEdit, setData , editItem , setDelete}