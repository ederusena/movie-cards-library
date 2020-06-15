// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {

    const rating = this.props.rating
      return (
      <div className='movie-card-rating'>
        <div>rating</div>
        <h1 className='rating'>{rating}</h1>
      </div>
      )
  }
}

export default Rating;