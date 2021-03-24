<template>
<div class="box">
    {{ msg }}
</div>
</template>

<script>
export default {
  data() {
    return {
        msg: '这是demo页面'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .box {
      font-size 20px
      color blue
  }
</style>