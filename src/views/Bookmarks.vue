<template>
  <div class="bookmarks mt-5">

    <Movies v-if="getBookmarkedMovies.length" :movies="getBookmarkedMovies"/>

    <div class="container p-5" v-else>
      <h1 class="text-white">No Bookmarked Movie Found</h1>
    </div>

  </div>
</template>


<script>
import Movies from "@/components/Movies";
import { mapGetters } from "vuex";

export default {
  name: "Bookmarks",
  components: { Movies },
  computed: {
    ...mapGetters('movies', [ 'getBookmarkedMovies' ]),
  },
}
</script>