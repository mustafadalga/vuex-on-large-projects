<template>
  <div class="container">

    <div class="card bg-light p-5">
      <h1 class="mb-5">{{ movie.title }}</h1>
      <div class="d-flex justify-content-center card-img">
        <img class="card-img-top" :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" alt="Card image cap">
      </div>

      <h5 class="card-text my-5">{{ movie.overview }}</h5>


      <div class="d-flex justify-content-between">
        <div class="genres d-grid gap-3 align-content-start">
          <span v-for="genre in movie.genres" class="badge bg-info text-dark d-flex align-items-center justify-content-center">{{ genre.name }}</span>

        </div>
        <div class="rates d-grid gap-3">
          <span class="badge bg-warning text-dark d-flex align-items-center justify-content-center">IMBd:{{ movie.vote_average }}</span>
          <span class="badge bg-warning text-dark d-flex align-items-center justify-content-center">Vote:{{ movie.vote_count }}</span>
          <span class="badge bg-warning text-dark d-flex align-items-center justify-content-center">Popularity:{{ movie.popularity }}</span>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios"
import { mapMutations,mapGetters } from "vuex";

export default {
  name: "MovieDetail",
  props: [ 'id' ],
  data() {
    return {
      movie: {}
    }
  },
  computed:{
    ...mapGetters('movies',['getAPIKey'])
  },
  created() {
    this.getMovieDetail();
  },
  methods: {
    ...mapMutations('notifications', [ 'setNotification' ]),
    async getMovieDetail() {

      try {
        const url = `https://api.themoviedb.org/3/movie/${this.id}?api_key=${this.getAPIKey}`;
        const response = await axios.get(url);

        this.movie = response.data;
      } catch (error) {

        this.setNotification('An error occurred during loading movie detail.Please refresh page and try again.')
      }
    }
  }
}
</script>

<style scoped>
.card-img img {
  max-width: 400px;
}
</style>