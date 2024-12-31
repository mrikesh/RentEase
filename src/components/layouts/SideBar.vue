<script setup>

const props = defineProps({
  items : {
    type : Array,
  }
})
</script>

<template>
  <div class="w-[50px] hover:w-[280px] transition-all duration-300 h-[calc(100vh-62px)] fixed top-[62px] left-0 z-10 bg-white border border-gray-300">
    <ul>
      <li v-for="item in items" :key="item.path" class="p-3 text-left overflow-hidden whitespace-nowrap hover:bg-[#f0f0f0]">
        <router-link :to="item.path" class="flex items-center text-[14px]"><i :class="item.icon" class="mr-6"></i> {{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style>
.eva {
  font-size: 24px;
  font-weight: 200;
}
</style>