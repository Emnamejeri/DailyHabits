<template>
  <NavigationComponent />
  <h1>The list of habits is below</h1>
  <form @submit.prevent="addHabit">
    <input v-model="newhabit" />
    <button @click="addHabit"><i class="fa-solid fa-plus"></i></button>
  </form>
  <ul>
    <li v-for="habit in habits" :key="habit.id">
      <span v-if="editingHabit.value && editingHabit.value.id === habit.id">
        <input v-model="newhabit" @keyup.enter="finishEditing" />
      </span>
      <span v-else>
        {{ habit.text }}
      </span>
      <button @click="removeHabit(habit)">
        <i class="fa-solid fa-trash"></i>
      </button>
      <button @click="modifyHabit(habit)">
        <i class="fa-solid fa-pencil"></i>
      </button>
    </li>
  </ul>
  <FooterSection />
</template>

<script setup>
import NavigationComponent from "./navigationComponent.vue";
import FooterSection from "./footerSection.vue";
import { ref } from "vue";

let id = 0;
const newhabit = ref("");
const habits = ref([
  { id: id++, text: "Learn HTML" },
  { id: id++, text: "Learn JavaScript" },
  { id: id++, text: "Learn Vue" },
]);
const editingHabit = ref(null);

function addHabit() {
  habits.value.push({ id: id++, text: newhabit.value });
  newhabit.value = "";
}

function removeHabit(habit) {
  habits.value = habits.value.filter((t) => t !== habit);
}

function modifyHabit(habit) {
  newhabit.value = habit.text;
  editingHabit.value = habit;
}

function finishEditing() {
  if (editingHabit.value) {
    editingHabit.value.text = newhabit.value;
    editingHabit.value = null;
    newhabit.value = "";
  }
}
</script>
