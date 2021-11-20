export default {
    getMovies:(state)=>state.movies,
    getAPIKey:(state)=>state.apiKey,
    getBookmarkedMovies: (state,getters,rootState) => {
        const email = rootState.auth.user.email;
        return state.movies
            .filter(movie => movie.bookmarkStatus)
            .map(movie => ({ ...movie, userEmail: email }))
    },
}