// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard'

class MovieList extends React.Component {
  render() {

    const movie = this.props.movies
      return (
      <div className='movie-list'>
        {movie.map(element => <MovieCard movies={element}/>)}
      </div>
      )
  }
}

export default MovieList;