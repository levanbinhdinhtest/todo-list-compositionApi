<template>
  <div class="container p-3">
        <div class="row">
            <div class="col-lg-12">
                <the-input/>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <list-to-do/>
            </div>
        </div>
  </div>
</template>

<script>
import ListToDo from './ListToDo.vue'
import TheInput from './TheInput.vue'
export default {
    components:{
        TheInput,
        ListToDo
    }
}
</script>

<style>
    .container{
        background: rgb(190, 220, 231);
    }
</style>