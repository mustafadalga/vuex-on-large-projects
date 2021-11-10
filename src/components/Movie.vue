<template>
  <router-link :to="`/movie/${movie.id}`" class="card col-sm-4">
    <img class="card-img-top" :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ movie.title }}</h5>
      <p class="card-text">{{ movie.overview.substr(0,100)+'...'  }}</p>
      <div class="d-flex justify-content-end">
        <div class="bookmark">
          <i :class="['fa-bookmark fa-2x',bookmarkIcon]" @click.prevent="processBookmark()"></i>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import {mapActions} from "vuex";
export default {
  name: "Movie",
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  computed:{
    bookmarkIcon(){
      return this.movie.bookmarkStatus ? 'fas':'far'
    }
  },
  methods:{
    ...mapActions('movies',['addMovieBookmark','deleteMovieBookmark']),
    processBookmark(){
      if (this.movie.bookmarkStatus){
        this.deleteMovieBookmark(this.movie.id)
      }else{
        this.addMovieBookmark(this.movie.id);
      }
    }
  }
}
</script>

<style scoped>
.card{
  position: relative;
}
.card-body{
  position: absolute;
  bottom:0;
  left: 0;
  width: 100%;
  color: white;
  background-color: rgba(0,0,0,.5);
}
.bookmark{
  max-width: 40px;
  z-index: 1;
  cursor: pointer;
}
</style>