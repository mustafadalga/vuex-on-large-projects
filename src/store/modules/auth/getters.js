export default {
    getUserProfile: (state, getters, rootState, rootGetters) => {

        const favouriteMovies = rootGetters['movies/getBookmarkedMovies'].map(movie => ({
            id: movie.id,
            poster_path: movie.poster_path
        }))

        return {
            ...state.user,
            favouriteMovies: favouriteMovies
        }
    }
}