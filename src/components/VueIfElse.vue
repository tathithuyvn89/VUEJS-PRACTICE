<template >
<div>
     <div v-if="isUsername">
      <label >Username</label>
      <input type="text" placeholder="Enter your username">
 </div>

 <div v-else>
      <label >Email</label>
      <input type="text" placeholder="Enter your Email">
 </div>
 <button @click="changeIfEmail">Please Press this button to change input field</button>
</div>
</template>
<script>
export default {
  name: 'VueIfElse',
  data(){
     return {
         isUsername: true
     } 
  },

  methods: {
      changeIfEmail(){
          this.isUsername = ! this.isUsername
      }
  }
}
</script>

<style>

</style>