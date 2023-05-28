<template>
  <div>Frist</div>
  <span> {{ info }}</span>
  <dd>{{ data }}</dd>
  <i>{{ porson.name }}-{{ porson.age }}</i>
</template>

<script setup>
import { ref, reactive } from 'vue';
const info = '这是第一条数据';
const data = () => {
  console.log('This is data');
};

const porson = reactive({
  name: '张三',
  age: 18,
});
</script>
<style scoped></style>
