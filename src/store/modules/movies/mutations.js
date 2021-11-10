export default {
    setMovies:(state,movies)=>state.movies=movies,
    changeMovieBookmarkStatus:(state,data)=>{
        const movieIndex=state.movies.findIndex(movie=>movie.id==data.id);
        state.movies[movieIndex].bookmarkStatus=data.status;
    }
}