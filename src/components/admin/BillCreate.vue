<script setup>

import InputField from "@/components/common/form/InputField.vue";
</script>
<template>
  <div class="shadow-md w-[1200px] mx-auto p-3">
    <h1>Bill Calculation</h1>
    <div class="flex gap-3">
      <div class="bg-white border border-gray-400 w-[65%] rounded-md p-2">
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

      <div class="bg-white border border-gray-400 flex-1 rounded-md p-2">
        Bill Overview

        <div class="flex justify-between">
          <span>Electricity</span>
          <span>Rs 0</span>
        </div>
        <div class="flex justify-between">
          <span>Water</span>
          <span>Rs 0</span>
        </div>
        <div class="flex justify-between">
          <span>Wifi</span>
          <span>Rs 0</span>
        </div>
        <div class="flex justify-between">
          <span>Waste Fee</span>
          <span>Rs 0</span>
        </div>
        <div class="flex justify-between">
          <span>House Rent</span>
          <span>Rs 0</span>
        </div>

        <div class="flex justify-between">
          <span>Grand Total</span>
          <span>Rs 0</span>
        </div>

      </div>
    </div>
  </div>
</template>