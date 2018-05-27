import React, {Component} from 'react';

class NewDrink extends Component {

	render(){
		return(
			<div>
				<form className='newPostForm' onSubmit={this.props.onSubmit}>
						<label>Name of Drink:</label>
						<input type='text' name="drink" placeholder="Drink Name Here" value={this.props.name} onChange={this.handleDrinkChange}/>
						<label>Store:</label>
						<input type='text' name="location" placeholder="Store Name Here" value={this.props.store} onChange={this.handleStoreChange}/>
						<label>Review Title:</label>
						<input type='text' name="review_title" placeholder="Title Your Review" value={this.props.review_title} onChange={this.handleTitleChange}/>
						<label>Review:</label>
						<textarea className="textarea" wrap="hard" type='area' name="review" value={this.props.review} onChange={this.handleReviewChange} />
						<label>Rating:</label>
						<input type='text' name="rating" placeholder="Rate this drink: 1 - 5. 5 being the best!" value={this.props.rating} onChange={this.handleRatingChange}/>
						<label>Add a Photo:</label>
						<input type='text' name="photoUrl" placeholder="url of photo" value={this.props.photo} onChange={this.handlePhotoChange}/>
				</form>
	        </div>
			)
	}
}

export default NewDrink;
