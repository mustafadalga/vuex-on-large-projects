<template>
  <div class="row">
    <Movie v-for="movie in movies" :movie="movie" :key="movie.id"/>
  </div>
</template>

<script>
import Movie from "@/components/Movie";

export default {
  name: "Movies",
  components: { Movie },
  props: {
    movies: {
      type: Array,
      required: true,
    }
  },
}
</script>