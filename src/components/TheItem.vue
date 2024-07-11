<template>
    <div class="card">
      <div class="card-body row">
        <div class="col-lg-8 text-left">
          <p class="card-text">{{ todo.action }}</p>
        </div>
        <div class="col-lg-4 text-right">
          <i class="fa-solid fa-xmark mr-2" @click="handleDelete"></i>
          <input type="checkbox" :name="todo.action" :value="todo.id" @change="handleChecked" :checked="isChecked">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    props: {
      todo: {
        type: Object,
        required: true,
      },
      checkedlist: {
        type: Array,
        required: true,
      },
    },
    setup(props, { emit }) {
      const store = useStore();
  
      // Computed property để kiểm tra xem todo có trong checkedlist không
      const isChecked = computed(() => props.checkedlist.includes(props.todo.id));
  
      function handleDelete() {
        store.dispatch("todo/deleteToDoAction", props.todo.id);
      }
  
      function handleChecked() {
        emit("handleChecked", props.todo.id);
      }
  
      return {
        handleDelete,
        handleChecked,
        isChecked,
      };
    },
  };
  </script>
  
  <style>
  .card {
    border: 1px solid #333;
  }
  </style>
  