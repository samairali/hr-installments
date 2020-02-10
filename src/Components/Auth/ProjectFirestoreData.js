import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {DeleteProjectAction} from '../../Redux/Actions/ProjectActions'
import {ShowProjects} from '../../Redux/Actions/FirestoreActions'
import {connect} from 'react-redux'

class ProjectFirestoreData extends Component {
	userDelete(authorId){
		console.log(authorId)
		var deleted = this.props.DeleteProjectAction(authorId)
		this.props.ShowProjects()
	}
	componentDidMount(){
		this.props.ShowProjects()
	}
	render() {
		console.log(this.props)
		let {firestore} = this.props;
		if(!Array.isArray(firestore) || !firestore.length ){
			return (
					<div>
						<h1>Loading</h1>
					</div>
				)
		}
		else{
			return (
					<div className="col-md-8">
						<div className="row">
							{
								firestore.map((index, elem) => {
									return (
										<div className="col-md-6 p-3" key={index.email}  >
											<div className="card">
											  <img className="card-img-top" src="..." alt="Card" />
											  <div className="card-body">
											    <h5 className="card-title text-dark">AuthorName is :  {index.authorFirstName} </h5>
											    <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.
											    </p>
											    <Link to={`/userdetails/${index.authorId}`} className="btn btn-primary">Show Full Data</Link>
											    <button type="button" className="btn btn-dark" 
											    	onClick={
											    		(e) => {
											    			e.preventDefault()
											    			this.userDelete(index.email)	
											    		}
											    	}>Dark</button>
											  </div>
											</div>
									 	</div>

										)
								})
							}

							
						</div>
					</div>
				)
		}
	}
	
}
const mapDispatchToProps = (dispatch) => {
	return{
		DeleteProjectAction : (authorId) => dispatch(DeleteProjectAction(authorId)) ,
		ShowProjects : () => dispatch(ShowProjects())
	}
}
export default connect(null,mapDispatchToProps)(ProjectFirestoreData)