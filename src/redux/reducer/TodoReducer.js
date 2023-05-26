
let initialState = { item: [], edit: false, data: "" }
const todoReducer = (state = initialState, action) => {
    console.log(state, "reducer")
    switch (action.type) {
        case "ADD":
            // let newTask = {
            //     // id: Date.now(),
            //     data: action.data
            // }
            let newTask = action.data
            return {
                ...state,
                item: state.item.concat(newTask)
            }
        case "SET_EDIT":
            return {
                ...state,
                edit: true

            }
        case "SET_DATA":
            return {
                ...state,
                data: action.data
            }
        case "EDIT_DATA":
            let newList = [...state.item]
            let index = newList.indexOf(state.data,);
            // console.log(newList, index, "newList")
            // console.log(index, "index")
            // console.log(state.data, "state.data")

            if (index !== -1) {
                // console.log(action.text, "action.text")
                newList[index] = action.text;
                // console.log(newList, "newNewList")
                return {
                    ...state,
                    title: "",
                    edit: false,
                    item: newList,
                    error: ""
                }
            } else {
                return {
                    ...state
                }
            }
        case "DELETE_DATA":
            let newList1 = [...state.item];
            console.log(newList1)
           let index1 = newList1.indexOf(action.data);
            console.log(index1)
            if (index1 !== -1) {
                newList1.splice(index1, 1);
                return {
                    ...state,
                    item: newList1
                }
            } else {
                return {
                    ...state
                }
            }

        default:
            return state
    }
}

export { todoReducer }