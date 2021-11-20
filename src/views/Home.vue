<template>
  <div class="home mt-5">
    <Movies :movies="getMovies"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Movies from "@/components/Movies";
import { mapGetters } from "vuex";

export default {
  name: 'Home',
  components: { Movies },
  computed: {
    ...mapGetters('movies', [ 'getMovies' ]),
  },
}
</script>
