export const CreateProjectAction = (project, resultNotification) => {
    return (dispatch, getState, {firebaseDatabase}) => {
        // make async call
        var firestore = firebaseDatabase.firestore();
        firestore.collection('users').add({
        	...project,
        	createdAt : new Date()
        }).then(
        	dispatch({type: 'CREATE_PROJECT', project , resultNotification})	
        ).catch((err) => console.log('some error'))
        
    }
}
export const DeleteProjectAction = (projectId) => {
    return (dispatch, getState, {firebaseDatabase}) => {
        // making async call for deleting the data
        var firestore = firebaseDatabase.firestore();
        firestore.collection('users').where('email','==',projectId).get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                    doc.ref.delete();
          })
        })
}
}