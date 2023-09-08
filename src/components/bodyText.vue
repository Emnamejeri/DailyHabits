<template>
  <header>
    <h2>Habits Tracker</h2>
    <br />
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
  padding: 2em 1em; /* Adjusted padding for smaller screens */
}

header h2 {
  margin: 0;
  font-size: 2.5em;
}

header h3 {
  margin-top: 1em; /* Adjusted margin for smaller screens */
  font-weight: normal;
}
.router-link {
  display: block; /* make the links block elements so they take the full width available */
  width: 70%; /* set width to 70% of the container's width */
  text-align: center; /* center the text within the button */
  padding: 15px 0; /* increase the vertical padding to make the button larger */
  /* center the buttons horizontally and add space between them */
}

/* If you have other .btn classes, adjust padding as required */
.btn {
  padding: 10px 15px;
  font-size: 16px; /* Adjust font size if necessary */
  text-decoration: none; /* remove the default underline of links */
}

.steps-container {
  display: flex;
  flex-wrap: wrap; /* Added wrap for smaller screens */
  justify-content: space-between;
  padding: 2em 1em; /* Adjusted padding for smaller screens */
  max-width: 800px;
  margin: 2em auto; /* Adjusted margin for smaller screens */
  background-color: #ecf0f1;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.step {
  flex: 1 1 250px; /* Updated flex properties to allow wrapping on smaller screens */
  display: flex;
  align-items: center;
  padding: 1em; /* Adjusted padding for smaller screens */
  border-right: 1px solid #bdc3c7;
  position: relative;
  margin-bottom: 1em; /* Added margin-bottom for smaller screens */
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
  margin-right: 1em; /* Adjusted margin for smaller screens */
  font-weight: bold;
}

.step p {
  margin: 0;
  flex: 1;
}

/* Centering buttons */
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
