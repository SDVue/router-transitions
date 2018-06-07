<template>
  <transition name="fade" mode="out-in">
    <router-view :key="$route.params.id" />
  </transition>
</template>

<script>
export default {};
</script>

<style>
</style>
