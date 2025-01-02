<script setup>
import {ref} from "vue";
import chevronDown from "@/assets/svg/chevron_down.svg"
import avatarIcon from "@/assets/svg/avatarIcon.svg"
import logoutIcon from "@/assets/svg/logoutIcon.svg"

const toggleDropdown = ref(false);

const profileDropdown = () => {
  toggleDropdown.value = !toggleDropdown.value;
}

</script>

<template>
  <div class="flex justify-between items-center fixed top-0 z-10 h-[62px] w-full bg-white border border-gray-300 p-3">
    <div>
      <RouterLink to="/">RentEase</RouterLink>
    </div>

    <div class="">
      <div class="border border-gray-300 rounded-full w-8 h-8 flex items-center justify-between relative cursor-pointer" @click="profileDropdown">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" class="w-8 h-8 object-cover">
        <img :src="chevronDown" alt="" class="absolute right-0 bottom-0 rounded-full w-3 h-3 bg-white">

        <div class="absolute top-12 right-0 w-60 p-3 border border-gray-200 rounded-md shadow-md bg-white z-10" v-if="toggleDropdown" >
          <div>
            <div class="flex justify-center items-center mb-2 p-2">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" class="w-[72px] h-[72px] object-cover rounded-full">
            </div>
            <p class="w-full flex justify-center mb-2 py-1">Rikesh Maharjan</p>

            <ul>
              <li class="py-1 hover:bg-[#f0f0f0]"><router-link to="/profile" class="w-full flex items-center gap-3"><img :src="avatarIcon" alt=""/>Profile</router-link></li>
              <li class="flex gap-3 py-1 hover:bg-[#f0f0f0]"><img :src="logoutIcon" alt=""/>Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>