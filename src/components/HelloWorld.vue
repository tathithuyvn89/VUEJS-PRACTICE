<template>
 <div>

   1. Hien thi gia tri cua counter thong qua moi lan click
   <br/>
   <button v-on:click="counter +=1">Add 1</button>
     <p>The button above has been clicked {{counter}}times</p>
   <br/>
   2. Tao ra aleart gia tri
   <br/>
   <button v-on:click="greet">Greet</button>
   <p>Sau khi bam greet se co gia tri la: {{greest}}</p>
   <br/>

   3. Truyen gia tri khi thuc hien click

   <button v-on:click="say('Hi')">Say Hi</button>
   
   <button v-on:click="say('Hello')">Say Hello</button>
   
   
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
   
  },
  data: function(){
    return {
      counter:0,
       name: 'Vue.js'
    }
  },
  
  methods:{
    greet:function(){
       alert('Hello '+ this.name+ '!')
    },
    say(message){
     alert(message)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
