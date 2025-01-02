<template>
  <div class="bill-calculation">
    <h1>Bill Calculation</h1>
    <div class="form-container">
      <!-- Left Side: Form Inputs -->
      <div class="form-section">
        <form @submit.prevent="calculateTotalBill">
          <div class="form-group">
            <label for="houseRent">House Rent</label>
            <input
                type="number"
                id="houseRent"
                v-model.number="houseRent"
                placeholder="Enter house rent"
            />
          </div>

          <div class="form-group">
            <label>Electricity Bill</label>
            <div class="input-group">
              <input
                  type="number"
                  v-model.number="electricity.previous"
                  placeholder="Previous Meter Reading"
              />
              <input
                  type="number"
                  v-model.number="electricity.current"
                  placeholder="Current Meter Reading"
              />
              <input
                  type="number"
                  v-model.number="electricity.rate"
                  placeholder="Rate per Unit"
              />
            </div>
          </div>

          <div class="form-group">
            <label>Water Bill</label>
            <div class="input-group">
              <input
                  type="number"
                  v-model.number="water.previous"
                  placeholder="Previous Meter Reading"
              />
              <input
                  type="number"
                  v-model.number="water.current"
                  placeholder="Current Meter Reading"
              />
              <input
                  type="number"
                  v-model.number="water.rate"
                  placeholder="Rate per Unit"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="wifi">Wi-Fi Charges</label>
            <input
                type="number"
                id="wifi"
                v-model.number="wifiCharges"
                placeholder="Enter Wi-Fi charges"
            />
          </div>

          <div class="form-group">
            <label for="wastageFee">Wastage Fee</label>
            <input
                type="number"
                id="wastageFee"
                v-model.number="wastageFee"
                placeholder="Enter wastage fee"
            />
          </div>

          <button type="submit">Generate Bill</button>
        </form>
      </div>

      <!-- Right Side: Overview of Calculations -->
      <div class="overview-section">
        <h2>Bill Overview</h2>
        <div class="overview-item">
          <span>House Rent:</span>
          <span>Rs {{ houseRent }}</span>
        </div>
        <div class="overview-item">
          <span>Electricity:</span>
          <span>Rs {{ electricity.total || 0 }}</span>
        </div>
        <div class="overview-item">
          <span>Water:</span>
          <span>Rs {{ water.total || 0 }}</span>
        </div>
        <div class="overview-item">
          <span>Wi-Fi Charges:</span>
          <span>Rs {{ wifiCharges }}</span>
        </div>
        <div class="overview-item">
          <span>Wastage Fee:</span>
          <span>Rs {{ wastageFee }}</span>
        </div>
        <div class="overview-item grand-total">
          <span><strong>Grand Total:</strong></span>
          <span><strong>Rs {{ totalBill }}</strong></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      houseRent: 0,
      electricity: {
        previous: 0,
        current: 0,
        rate: 0,
        get total() {
          const units = this.current - this.previous;
          return units > 0 ? units * this.rate : 0;
        },
      },
      water: {
        previous: 0,
        current: 0,
        rate: 0,
        get total() {
          const units = this.current - this.previous;
          return units > 0 ? units * this.rate : 0;
        },
      },
      wifiCharges: 0,
      wastageFee: 0,
      totalBill: 0,
    };
  },
  methods: {
    calculateTotalBill() {
      // Total Bill Calculation
      this.totalBill =
          this.houseRent +
          this.electricity.total +
          this.water.total +
          this.wifiCharges +
          this.wastageFee;
    },
  },
};
</script>

<style scoped>
.bill-calculation {
  max-width: 1000px;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.form-section,
.overview-section {
  width: 48%;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: 600;
  display: block;
  margin-bottom: 5px;
}

.input-group {
  display: grid;
  gap: 10px;
}

input {
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  font-size: 16px;
  margin-bottom: 10px;
}

input:focus {
  outline-color: #007bff;
  border-color: #007bff;
}

button {
  width: 100%;
  background-color: #28a745;
  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}

button:focus {
  outline: none;
}

.overview-section {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.overview-item {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
}

.overview-item:last-child {
  border-bottom: none;
}

.grand-total {
  font-weight: bold;
  font-size: 18px;
  color: #28a745;
}

.grand-total span {
  font-size: 20px;
}
</style>
