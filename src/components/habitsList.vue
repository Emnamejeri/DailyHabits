<template>
  <div>
    <h1>Your Habits List</h1>
    <p>
      "Habits are the invisible architecture of daily life. We repeat about 40%
      of our behavior almost daily, so our habits shape our existence and our
      future. If we change our habits, we change our lives." — Gretchen Rubin
    </p>
    <div class="input-group">
      <input v-model="newHabit" placeholder="New habit" />
      <select v-model="selectedCategory" placeholder="Select A category">
        <option>Health</option>
        <option>Education</option>
        <option>Nutrition</option>
        <option>Time Management</option>
        <option>Hobbies</option>
        <option>Spirituality</option>
        <option>Other</option>
      </select>
      <button @click="addHabit">Add Habit</button>
    </div>

    <div v-for="habit in habits" :key="habit.id">
      <p v-if="editingHabit !== habit.id">
        <span
          ><strong>{{ habit.category }}</strong> {{ habit.text }}</span
        >
        <span>
          <button @click="beginEditing(habit)">Update</button>
          <button @click="removeHabit(habit)">Delete</button>
        </span>
      </p>
      <div v-else>
        <input v-model="editedText" placeholder="Edit habit" />
        <button @click="updateHabit(habit)">Save</button>
        <button @click="() => (editingHabit.value = null)">Cancel</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
div {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Arial", sans-serif;
  background-color: #f9f9f9;
  border-radius: 5px;
}

h1 {
  text-align: center;
  color: #333;
}

.input-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

input {
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 16px;
  width: 40%;
}

select {
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 16px;
  width: 25%;
  background-color: #fff;
  appearance: none; /* To remove default OS styling */
}

/* Giving the category a distinct look in the habit display */
strong {
  background-color: #e9ecef;
  padding: 5px 10px;
  border-radius: 4px;
  margin-right: 10px;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #0056b3;
}

/* Secondary buttons for Update/Delete */
button:nth-child(2),
button:nth-child(3) {
  background-color: #6c757d;
}

button:nth-child(2):hover,
button:nth-child(3):hover {
  background-color: #545b62;
}

p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;
}

p > span:first-child {
  flex: 1;
}

div[v-for="habit in habits"] > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;
}
</style>

<script setup>
import { ref } from "vue";

const newHabit = ref("");
const selectedCategory = ref("Health");

// Initialize from localStorage
let storedHabits = localStorage.getItem("habits");
const habits = ref(storedHabits ? JSON.parse(storedHabits) : []);

const editingHabit = ref(null);
const editedText = ref("");

function updateLocalStorage() {
  localStorage.setItem("habits", JSON.stringify(habits.value));
}

function addHabit() {
  if (newHabit.value.trim() !== "") {
    habits.value.push({
      id: habits.value.length,
      text: newHabit.value,
      category: selectedCategory.value,
    });
    newHabit.value = "";
    updateLocalStorage();
  }
}

function removeHabit(habit) {
  habits.value = habits.value.filter((h) => h.id !== habit.id);
  updateLocalStorage();
}

function beginEditing(habit) {
  editingHabit.value = habit.id;
  editedText.value = habit.text;
}

function updateHabit(habit) {
  const habitToUpdate = habits.value.find((h) => h.id === habit.id);
  if (habitToUpdate) {
    habitToUpdate.text = editedText.value;
  }
  editingHabit.value = null;
  updateLocalStorage();
}
</script>
