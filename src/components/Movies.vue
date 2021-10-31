<template>
  <div class="row">
    <Movie  v-for="movie in getMovies" :movie="movie" :key="movie.id"/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Movie from "@/components/Movie";
export default {
  name: "Movies",
  components: { Movie },
  computed: {
    ...mapGetters('movies', [ 'getMovies' ])
  }

}
</script>

<style scoped>

</style>