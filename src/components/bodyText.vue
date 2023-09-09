<template>
  <header>
    <h3>
      Your Way to a New life Mastery <br />
      <br />
      "Shape Tomorrow, One Habit at a Time"
    </h3>
  </header>

  <div class="steps-container">
    <div class="step">
      <div class="step-circle">1</div>
      <p>Step 1: Add all the habits you want to master in My Habits.</p>
    </div>
    <div class="step">
      <div class="step-circle">2</div>
      <p>Step 2: Each day add the habits you completed in My Performance.</p>
    </div>
    <div class="step">
      <div class="step-circle">3</div>
      <p>Step 3: Keep Daily track of your Performance.</p>
    </div>
  </div>

  <router-link to="/habitslist" class="btn btn-info">My Habits</router-link>
  <router-link to="/day" class="btn btn-warning">My Performance</router-link>
</template>
<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
}

header {
  color: #2c3e50;
  text-align: center;
  padding: 2em 1em;
}

header h3 {
  margin-top: 1em;
  font-weight: normal;
}
.router-link {
  display: block;
  width: 100%;
  text-align: center;
  padding: 15px 0;
}
.btn {
  padding: 10px 15px;
  font-size: 26px;
  text-decoration: none;
  width: 30%;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 1rem;
  margin-bottom: 5rem;
}

.steps-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2em 1em;
  max-width: 800px;
  margin: 2em auto;
  background-color: #ecf0f1;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.step {
  flex: 1 1 250px;
  display: flex;
  align-items: center;
  padding: 1em;
  border-right: 1px solid #bdc3c7;
  position: relative;
  margin-bottom: 1em;
}

.step:last-child {
  border-right: none;
}

.step-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #3498db;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1em;
  font-weight: bold;
}

.step p {
  margin: 0;
  flex: 1;
}

div[role="main"] {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px;
}

/* Media Query for Small Screens - Mobile View */
@media (max-width: 600px) {
  .steps-container {
    flex-direction: column;
  }

  .step {
    border-right: none;
    border-bottom: 1px solid #bdc3c7;
  }
}
</style>

<script>
export default {
  name: "bodyText",
};
</script>
