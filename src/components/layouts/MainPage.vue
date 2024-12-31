<script setup>
import NavBar from "@/components/layouts/NavBar.vue";
import SideBar from "@/components/layouts/SideBar.vue";

const sidebarItems = [
  {
    title : "Dashboard",
    path : "/",
    icon : "eva eva-grid-outline",
  },
  {
    title : "Users",
    path : "/users",
    icon : "eva eva-people-outline",
  },
  {
    title : "Payments",
    path : "/payments",
    icon : "eva eva-credit-card-outline",
  },
]
</script>

<template>
  <NavBar />
  <div class="">
    <SideBar :items="sidebarItems" />
      <div class="ml-[50px] mt-[62px] p-6">
        <RouterView />
      </div>
  </div>
</template>