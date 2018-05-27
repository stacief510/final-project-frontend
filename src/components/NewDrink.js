import React, {Component} from 'react';

class newDrink extends Component {

	render(){
		return(
			<div>
	           <form onSubmit={this.props.onSubmit}>
	                <label>Name of Drink:</label>
	                <input type='text' name='name' placeholder='drink name' value={this.props.name} onChange={this.props.handleNameChange}/>
	                <label>Store:</label>
	                <input type='text' name='store' placeholder='store' value={this.props.store} onChange={this.props.handleStoreChange}/>
	                <label>Review Title:</label>
	                <input type='text' name='title' placeholder='Title' value={this.props.review_title} onChange={this.props.handleReviewTitleChange}/>
                    <label>Review:</label>
	                <input type='textarea' name='review' placeholder='Type your review' value={this.props.review} onChange={this.props.handleReviewChange}/>
	                <label>Rating:</label>
	                <input type='text' name='rating' placeholder='Rating' value={this.props.rating} onChange={this.props.handleRatingChange}/>
	                <label>Attach a Photo:</label>
	                <input type='text' name='photo' placeholder='Enter URL' value={this.props.drink_photo} onChange={this.props.handleDrinkPhotoChange}/>

                    <button className="submit" type='submit'>Submit</button>
	            </form>
	        </div>
			)
	}
}

export default newDrink;
