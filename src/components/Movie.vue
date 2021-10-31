<template>
  <div class="card col-sm-4">
    <img class="card-img-top" :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ movie.title }}</h5>
      <p class="card-text">{{ movie.overview.substr(0,100)+'...'  }}</p>
      <a href="#" class="btn btn-primary">View</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>