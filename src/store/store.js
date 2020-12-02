const initialState = {
	str: "",
	list: []

}

const reducer = (state=initialState, action) => {

	switch(action.type){
		case 'inputChange':
		console.log(action.val)
			return{
				...state,
				str: action.val
			}

		case 'addItem':
			return{
				...state,
				list: [...state.list, state.str],
				str: ""
			}

		case 'deleteItem':
			return{
				...state,
				list: state.list.filter((item,index)=>index!==action.val)
			}

		default:
			return state

	}

}

export default reducer