import React , {Component} from 'react'
import {connect} from 'react-redux'
import CreateProject from './../Projects/CreateProject'
import {ShowProjects} from '../../Redux/Actions/FirestoreActions'
import ProjectFirestoreData from './ProjectFirestoreData'

class Dashboard extends Component{
    componentDidMount(){
        this.props.firestoreAction()
    }
    render(){
        const {firestore, dataEnteredNotification} = this.props
        return(
            <div className="container">
                <div className="row">
                    <CreateProject enteredNotification={dataEnteredNotification} />
                    <ProjectFirestoreData firestore={firestore} />
                </div>
            </div>
        )
        
    }
}
const mapStateToProps = (state) => {
    console.log('from dashboard state to props ==> ',state)
    return {
        firestore: state.firestore,
        dataEnteredNotification: state.user.resultNotification
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        firestoreAction : () => dispatch(ShowProjects())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)