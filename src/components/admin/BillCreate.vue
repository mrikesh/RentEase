<script setup>

import InputField from "@/components/common/form/InputField.vue";
import internetIcon from "@/assets/svg/bill/internetIcon.svg"
import wasteIcon from "@/assets/svg/bill/wasteIcon.svg"
import waterIcon from "@/assets/svg/bill/waterIcon.svg"
import roomIcon from "@/assets/svg/bill/roomIcon.svg"
import bulbIcon from "@/assets/svg/bill/electricityIcon.svg"
</script>
<template>
  <div class="shadow-md w-[1200px] mx-auto p-3">
    <h1>Bill Calculation</h1>
    <div class="flex gap-3">
      <div class="bg-white border border-gray-400 w-[65%] rounded-md p-3">
        <h1>Bill Calculation</h1>

        <label>Electricity:</label>
        <div class="flex w-full gap-3">
          <InputField placeholder="Previous Meter Reading" />
          <InputField placeholder="Current Meter Reading" />
          <InputField placeholder="Rate Per Unit" />
        </div>

        <label>Water:</label>
        <div class="flex w-full gap-3">
          <InputField placeholder="Previous Meter Reading" />
          <InputField placeholder="Current Meter Reading" />
          <InputField placeholder="Rate Per Unit" />
        </div>

        <label>Wifi:</label>
        <InputField placeholder="Enter Bill Amount" />

        <label>Waste Fee:</label>
        <InputField placeholder="Enter Bill Amount" />

        <label>Room Rent:</label>
        <InputField placeholder="Enter Bill Amount" />
      </div>

      <div class="flex-1">
        <div class="bg-white border border-gray-400 rounded-md p-3">
          Bill Overview

          <div class="py-2">
            <ul class="list-disc pl-5">
              <li>
                <div class="flex justify-between">
                  <div class="flex gap-1">
                    <img :src="bulbIcon" alt="" class="w-4 h-4">
                    <span>Electricity</span>
                  </div>
                  <span>Rs 0</span>
                </div>
              </li>

              <li>
                <div class="flex justify-between">
                  <div class="flex gap-1">
                    <img :src="waterIcon" alt="" class="w-6 h-6">
                    <span>Water</span>
                  </div>
                  <span>Rs 0</span>
                </div>
              </li>

              <li>
                <div class="flex justify-between">
                  <div class="flex gap-1">
                    <img :src="internetIcon" alt="" class="w-6 h-6 ">
                    <span>Wifi</span>
                  </div>
                  <span>Rs 0</span>
                </div>
              </li>

              <li>
                <div class="flex justify-between">
                  <div class="flex gap-1">
                    <img :src="wasteIcon" alt="" class="w-6 h-6">
                    <span>Waste Fee</span>
                  </div>
                  <span>Rs 0</span>
                </div>
              </li>

              <li>
                <div class="flex justify-between">
                  <div class="flex gap-1">
                    <img :src="roomIcon" alt="" class="w-6 h-6">
                    <span>Room Rent</span>
                  </div>
                  <span>Rs 0</span>
                </div>
              </li>
            </ul>
          </div>

          <div class="flex justify-between border-t-2 border-dotted border-gray-300 mt-2 py-2">
            <span>Grand Total</span>
            <span>Rs 0</span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>