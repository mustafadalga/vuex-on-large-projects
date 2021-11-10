import axios from "axios";

export default {
    async setUserInformation({ commit }) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
            commit('setUserInformation', response.data);

        } catch (error) {
            const notification = "An error occurred during fetching user information.Please try again.";
            commit("notifications/setNotification", notification, { root: true })
        }
    },
}