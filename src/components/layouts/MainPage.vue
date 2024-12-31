<script setup>
import NavBar from "@/components/layouts/NavBar.vue";
import SideBar from "@/components/layouts/SideBar.vue";
</script>

<template>
  <div>
    <NavBar />
    <SideBar />
    <RouterView />
  </div>
</template>