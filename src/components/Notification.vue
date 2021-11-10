<template>
  <div class="alert alert-danger">
    {{  notification }}
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: {
    notification: {
      type: String,
    }
  }
}
</script>

<style scoped>

</style>