<template>
   <el-button @click="inc">vue3 button click</el-button>
  <p>{{ count }}</p>
</template>

<script>

import { ref } from 'vue';

export default {
  setup () {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };

    return {
      count,
      inc,
    };
  },
};
</script>
