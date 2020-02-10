import React , {Component} from 'react'
import {connect} from 'react-redux'
import {CreateProjectAction} from './../../Redux/Actions/ProjectActions'
import {ShowProjects} from '../../Redux/Actions/FirestoreActions'


class CreateProject extends Component {
    state = {
        name: '' ,
        email: '',

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        var resultNotification = 'Data Entered Succesfully'
        this.props.createProject(this.state, resultNotification)
        this.props.showProjects()           
    }
    

    render() {
        return(
            <div className="col-md-4 p-2">
                <div className="border p-3">
                    <h3 className="border-bottom pb-3">Create New project Here</h3>
                    <form onSubmit={this.handleSubmit}>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="text" name="name" id="name" className="form-control" value={this.state.name} onChange={this.handleChange}  />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Email</label>
                            <input type="text" name="email" id="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
                          </div>
                          <input type="submit" value="submit" className="btn btn-primary" />
                    </form>
                    <p>{this.props.enteredNotification}</p>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project , resultNotification) => dispatch(CreateProjectAction(project , resultNotification)),
        showProjects: () => dispatch(ShowProjects())
    }
}
export default connect(null,mapDispatchToProps)(CreateProject)