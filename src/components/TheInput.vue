<template>
  <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="What do you want ?" v-model="dataInput.action">
  <div class="input-group-append">
    <button class="btn btn-success" type="button" @click="handleSubmit">Submit</button>
  </div>
</div>
</template>

<script>
import { reactive} from 'vue';
import { useStore } from 'vuex';


export default {
    setup(){
      const store = useStore();
      const dataInput = reactive({
          action:""
        });
        // Hàm gọi action để thêm mới to-do
      const fnAddAction = (input) => {
          store.dispatch("todo/addToDoAction", input);
          // store.dispatch("todo/addToDoAction", { action: input.action });
          };

      // Xử lý khi nhấn nút Submit
      const handleSubmit = () => {
          fnAddAction(dataInput); // Truyền dữ liệu từ dataInput vào fnAddAction
          dataInput.action = ""; // Reset input sau khi thêm thành công
          console.log(dataInput)
        };
      return{
          dataInput,
          handleSubmit
        }
    }
}
</script>

<style>

</style>