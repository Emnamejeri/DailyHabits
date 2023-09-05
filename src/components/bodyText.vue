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
  <router-link to="/habitslist" class="btn btn-warning">My Habits</router-link>
  <router-link to="/day" class="btn btn-warning">Days</router-link>
</template>
<style scoped>
header {
  margin-top: 12vh;
  margin-bottom: 12vh;
}

.btn {
  width: 350px;
  height: 100px;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  line-height: 50px;
  margin: 0 auto;
  margin-left: 35px;
}
header h2 {
  text-decoration: underline;
}
header {
  border: 2px black solid;
}
</style>
<script>
export default {
  name: "bodyText",
};
</script>
