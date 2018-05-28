import React, {Component} from 'react';

class NewDrink extends Component {
	state = {
		name: '',
		store: '',
		review_title: '',
		review: '',
		rating: '',
		photo: '',
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
		console.log(e.target.name + ': ' + e.target.value)
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state);
	}

	closeModal(){
		document.getElementById("modal").click();
	}

	render(){
		return(
			<div>
				<div className="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
						<form className='newPostForm' onSubmit={(e) => this.handleSubmit(e)}>
								<div className="modal-header">
										<h5 className="modal-title" id="modalTitle">Create a Post:</h5>
										<button type="button" className="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
										</button>
								</div>
								<div className="modal-body">
									
											<label>Name of Drink:</label>
											<input type='text' name="name" placeholder="Drink Name Here" value={this.state.name} onChange={this.handleChange}/>
											<label>Store:</label>
											<input type='text' name="store" placeholder="Store Name Here" value={this.state.store} onChange={this.handleChange}/>
											<label>Review Title:</label>
											<input type='text' name="review_title" placeholder="Title Your Review" value={this.state.review_title} onChange={this.handleChange}/>
											<label>Review:</label>
											<textarea className="textarea" wrap="hard" type='area' name="review" value={this.state.review} onChange={this.handleChange} />
											<label>Rating:</label>
											<input type='text' name="rating" placeholder="Rate this drink: 1 - 5. 5 being the best!" value={this.state.rating} onChange={this.handleChange}/>
											<label>Add a Photo:</label>
											<input type='text' name="photo" placeholder="url of photo" value={this.state.photo} onChange={this.handleChange}/>
									
								</div>
								<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
										<button type="submit" className="btn btn-primary" onClick={this.closeModal}>Save</button>
								</div>

							</form>
						</div>
					</div>
				</div>
			</div>
			)
	}
}
export default NewDrink;