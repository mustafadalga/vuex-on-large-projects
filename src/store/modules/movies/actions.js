import axios from "axios";

export default {
    async setMovies({rootState,state, commit }) {
        try {
            const url=`https://api.themoviedb.org/3/movie/popular?api_key=${state.apiKey}`
            const response = await axios.get(url);

            const movies = response.data.results.map(movie => ({
                ...movie,
                bookmarkStatus: false,
                email: rootState.auth.user.email
            }));

            commit('setMovies', movies);

        } catch (error) {

            const notification = "An error occurred during fetching movies.Please try again.";
            commit("notifications/setNotification", notification, { root: true })
        }
    },
    async addMovieBookmark({ rootState, commit }, movieID) {
        try {
            const data = {
                email: rootState.auth.user.email,
                movieID: movieID
            }

            /*
             API PROCESS
            ...........
           const response=await axios.post('add-movie-bookmark',data);
           const data=response.data.data
            ...........
             */

            commit('changeMovieBookmarkStatus', {
                id: movieID,
                status:true,
                // status: data.status,
                // bookmarkEmail: data.email,
                // userEmail: rootState.auth.user.email,
                commit: commit
            });

        } catch (error) {

            const notification = "An error occurred during adding movie to bookmark.Please try again.";
            commit("notifications/setNotification", notification, { root: true })
        }
    },
    async deleteMovieBookmark({ rootState, commit }, movieID) {
        try {

            /*
             API PROCESS
            ...........
            const url = `delete-movie-bookmark/${movieID}`

            axios.delete(url, {
                headers: { Authorization: authorizationToken },
                data: { email: rootState.auth.user.email }
            });
            ...........
             */

            commit('changeMovieBookmarkStatus', {
                id: movieID,
                status: false
            });

        } catch (error) {
            const notification = "An error occurred during removing movie from bookmark.Please try again.";
            commit("notifications/setNotification", notification, { root: true })
        }
    }
}