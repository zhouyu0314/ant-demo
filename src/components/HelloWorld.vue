<template>
  <div>
    <a-button type="primary" @click="btn">按钮</a-button>
    <a-button type="primary" @click="dropDown">下拉</a-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {}
  },
  methods: {
    btn() {
      this.$router.push("/btn")
    },
    dropDown() {
      this.$router.push("/dropDown")
    }
  }
}
</script>

<style scoped>

</style>
