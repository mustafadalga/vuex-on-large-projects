<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark mb-5">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/bookmarks">Bookmarks</router-link>
        </li>
      </ul>

      <div class="d-flex">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/profile">Profile</router-link>
          </li>
        </ul>
      </div>
    </div>


  </nav>

  <div class="my-3">
    <Notification
        v-for="notification in getNotifications"
        :key="notification"
        :notification="notification"/>
  </div>

  <router-view/>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Notification from "@/components/Notification";

export default {
  components: { Notification },
  computed: {
    ...mapGetters('notifications', [ 'getNotifications' ]),
  },
  async created() {
    await this.setUserInformation();
    this.setMovies();
  },

  methods: {
    ...mapActions('movies', [ 'setMovies' ]),
    ...mapActions('auth', [ 'setUserInformation' ])
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
