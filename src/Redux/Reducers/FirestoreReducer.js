

const initState = {
	
}

const FirestoreReducer = (state = initState , action) => {
	if(action.type === 'SHOW_PROJECTS'){
		state = action.final;
		return state;
	}
	return state
}
export default FirestoreReducer