<template>
<div class="bar">
    {{ msg }}
</div>
</template>

<script>
export default {
  data() {
    return {
      msg: '这是bar页面'
    }
  }
}
</script>

<style lang='less' scoped>
.bar {
    font-size: 24px;
    color: red;
} 
</style>