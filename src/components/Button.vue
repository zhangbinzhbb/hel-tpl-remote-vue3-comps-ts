<template>
  <button @click="inc">vue2 button click</button>
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
