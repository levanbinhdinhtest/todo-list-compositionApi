<template>
  <div class="list">
    <div class="row mt-3" v-for="(todo, index) in todolist" :key="index">
      <div class="col-lg-12 item">
        <TheItem :todo="todo" @handleChecked="updateCheckedList" :checkedlist="checkedList" />
      </div>
    </div>
    <p>{{ checkedList }}</p>
    <div class="row">
      <div class="col-md-4 offset-md-4 mt-3">
        <button class="btn btn-danger" @click="handleDelete">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import TheItem from './TheItem.vue';
import { onMounted, ref, computed } from 'vue';

export default {
  components: {
    TheItem,
  },

  setup() {
    const store = useStore();
    const checkedList = ref([]);

    // Mapping action
    const getAllList = async () => {
      try {
        await store.dispatch('todo/getAllListAction');
      } catch (error) {
        console.error('Error fetching list:', error);
      }
    };

    // Mapping getter
    const todolist = computed(() => store.getters['todo/getAllList']);

    // Update list item checked
    function updateCheckedList(id) {
      const index = checkedList.value.indexOf(id);
      if (index > -1) {
        checkedList.value.splice(index, 1);
      } else {
        checkedList.value.push(id);
      }
      console.log('Checked List:', checkedList.value);
    }

    // Mapping action delete
    const handleDelete = () => {
      console.log('Deleting:', checkedList.value);
      if (Array.isArray(checkedList.value)) {
        store.dispatch("todo/deleteToDoAction", checkedList.value).then(() => {
          // Clear the checkedList after deletion
          checkedList.value = [];
          // Reload the list to ensure it reflects the current state
          getAllList();
        }).catch(error => {
          console.error('Delete Error:', error);
        });
      } else {
        console.error('checkedList is not an array:', checkedList.value);
      }
    };
    // const handleDelete = () => {
    //   store.dispatch("todo/deleteToDoAction", checkedList.value);
    //   checkedList.value=[]; // Clear the checkedList after deletion
    // };

    // Call action on mounted
    onMounted(() => {
      getAllList();
    });

    return {
      todolist,
      checkedList,
      updateCheckedList,
      handleDelete,
    };
  },
};
</script>

<style>
.card {
  border: 1px solid #333;
}
</style>
