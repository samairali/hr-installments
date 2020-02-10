
let resultNotification = '';
const UserReducer = (state =  {resultNotification}, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT':
				state.resultNotification = 'user created successfully vvv'
				break;
		default :
			return state;
	}
    return state;
}
export default UserReducer