<template>
  <div id="myapp">
      <h1>Thay doi thuoc tinh cua Css</h1>
        <h3>Thay doi mau qua thuoc tinh class cua the Dev</h3>
      <div class="div" v-bind:class="[isActive ? 'red' : 'blue']" @click = "toggleClass()"></div>
      <div class="div" v-bind:class="[isActive ? 'blue' : 'red']" @click = "isActive = !isActive"></div>
       <h3>Thay doi font-size cua the dev</h3>
       <button @click="fontSize++">Increse font-size</button>
       <button @click="fontSize--">Descrease font-size</button>
       <p v-bind:style="{ fontSize:fontSize + 'px'}">
           Font size is: {{fontSize}}
       </p>

       
  </div>
</template>

<script>
export default {
  name: 'ChangeCss',
  data:function() {
      return {
          isActive: true,
          fontSize: 30
      }
     
  },
  methods: {
      toggleClass() {
          this.isActive = !this.isActive
      }
  }
}
</script>
<style scoped>
.red {
    background: red;
}
.blue {
    background: blue;
}
.div {
    width: 100px;
    height: 100px;
    display: inline-block;
    border: 1px solid black;
}
</style>