<template>
  <div>
      <h1>Show item info in list</h1>
      <!-- <ul id="example">
          <li v-for="(item, index) in items" :key="index">
               {{parentMessage}} - {{index}} - {{item.message}}
          </li>
      </ul> -->
      <ul v-for="(set, index) in sets" :key="index">
          <!-- <li v-for="(value, name, index) in object" :key="index">
             {{index+1}} . {{name}} : {{value}}
          </li>
          <li v-for="(number, index) in evenNumbers" :key="index">
              {{number}}
          </li> -->
          <li v-for="(number, index) in even(set)" :key="index">
                {{index}}  :  {{number}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
   
   name : 'VueLoop',
   data(){
       return {
           parentMessage: 'Parent',
           items:[
               {message: 'Lam'},
               {message: 'Ha'},
               {message: 'Thuy'}

           ],
           
           object: {
               title: 'Test Title 1',
               author : 'Thuy Ta',
               pulishedAt: '2020-10-05'
           },
           numbers:[1,2,3,4,5,7,9],
           sets:[
               [1,2,4,6,7], 
               [4,6,7,9,20]
               ]
       }
   },
 // Tai cho nay phai dung computed neu dung method thi se khong ra duoc ket qua
   computed: {
       evenNumbers() {
           return this.numbers.filter(function(number){
               return number % 2 === 0
           })
       }
   },

   methods: {
       even(numbers) {
           return numbers.filter(function(number){
               return number%2 ===0
           })
       }
   }

   
}
</script>

<style>

</style>