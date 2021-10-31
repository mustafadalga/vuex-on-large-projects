<template>
  <div class="home mt-5">
    <Movies/>
  </div>
</template>

<script>
// @ is an alias to /src
import Movies from "@/components/Movies";
export default {
  name: 'Home',
  components: { Movies },
}
</script>
