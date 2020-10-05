<template>
  <div>
      <h1>This is page of user</h1>
      <p>Param of router is: {{$route.params.id}}</p>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
name: 'User'
}
</script>

<style>

</style>
