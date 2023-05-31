<template>
  <table border="1" v-cell-select="weekdayTimeData">
    <tr>
      <th rowspan="2">星期/时间</th>
      <th colspan="12">00:00 - 12:00</th>
      <th colspan="12">12:00 - 24:00</th>
    </tr>
    <tr>
      <th v-for="n in 24">{{ n - 1 }}</th>
    </tr>
    <tr v-for="n in 7" :data-weekday="n-1">
    <tr class="weekday-title">{{weekdayTitle[n-1]}}</tr>
    <td v-for="m in 24" :data-time="m-1"></td>
    </tr>
  </table>
</template>

<script setup>
import {reactive} from 'vue';
import vCellSelect from './vCellSelect'

const weekdayTimeData=reactive([])

const weekdayTitle = [
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六',
  '星期日',
];
</script>
<style scoped lang="scss">
table {
  border-collapse: collapse;
  .weekday-title{
    width:100px;
  }
  tr{
    height:50px;
  }
  td{
    width:50px;
  }
  &.target{
    background-color:skyblue;
  }
}
</style>
