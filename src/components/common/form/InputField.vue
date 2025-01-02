<script setup>
const props = defineProps({
  placeholder: {
    type: String,
  },
});
</script>


<template>
  <div class="border border-gray-300 w-80 rounded-sm mb-3">
    <input type="number" :placeholder="props.placeholder" class="w-full p-2">
  </div>
</template>