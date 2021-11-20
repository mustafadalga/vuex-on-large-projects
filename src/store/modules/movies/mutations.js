export default {
    setMovies:(state,movies)=>state.movies=movies,
    changeMovieBookmarkStatus: (state, data) => {

        if (data.bookmarkEmail == data.userEmail){

            const movieIndex = state.movies.findIndex(movie => movie.id == data.id);
            state.movies[movieIndex].bookmarkStatus = data.status;

        }else{

            const notification = "An error occurred during adding movie to bookmark.Please try again.";
            data.commit("notifications/setNotification", notification, { root: true })

        }
    }
}