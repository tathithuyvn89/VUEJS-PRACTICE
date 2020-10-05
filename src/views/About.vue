<template>
  <div>
    <h1>A Couple Example about Vue Js</h1>
    <VueIfElse/>
    <hr/>
    <VueLoop/>
    <hr/>
     <ChangeCss/>
    <hr/>
  </div>
</template>

<script>
import VueIfElse from '@/components/VueIfElse.vue'
import ChangeCss from '@/components/ChangeCss.vue'
import VueLoop from '@/components/VueLoop.vue'
export default {
name : 'About',
components : {
  VueIfElse,
  ChangeCss,
  VueLoop
}

}
</script>

<style>

</style>
