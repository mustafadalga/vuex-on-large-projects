<template>
  <div class="profile container p-5 mb-5">

    <h1 class="text-white">My Profile</h1>

    <div class="text-white mt-5">
      <img src="https://placekitten.com/640/360" alt="">
      <h3><strong>Name:</strong>{{ getUserProfile.name }}</h3>
      <h6><strong>username:</strong>{{ getUserProfile.username }}</h6>
      <h6><strong>email:</strong>{{ getUserProfile.email }}</h6>
    </div>

    <h3 class="bg-white text-primary my-5">My Favourites</h3>

    <div class="row gap-3 justify-content-center">
      <div class="col col-md-2 card p-0 positive-relative" v-for="movie in getUserProfile.favouriteMovies">

        <router-link :to="`/movie/${movie.id}`">
          <img :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" class="card-img-top">
        </router-link>

      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  computed: {
    ...mapGetters('auth', [ 'getUserProfile' ]),
  }
}
</script>