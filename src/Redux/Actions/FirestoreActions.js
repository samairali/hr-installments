export const ShowProjects = () => {
    return (dispatch, getState, {firebaseDatabase}) => {
        // make async call
        var firestoreData = firebaseDatabase.firestore();
        
		firestoreData.collection('users').get()
		.then((result) => {
			var final = []
			result.docs.forEach((doc) => {
				final.push(doc.data())
			})
			// console.log('final is ==== > ', final)
			dispatch({type:'SHOW_PROJECTS', final})
				
		}).catch((err) => console.log(err))
        
    }
}