<template>
  <div class="habit-header">Master Your New Habits!</div>

  <div class="container">
    <div class="habit-container" v-for="habit in habits" :key="habit.id">
      <input type="checkbox" v-model="selectedHabits" :value="habit.text" />
      <label>{{ habit.text }}</label>
    </div>
    <div class="date-container">
      <input type="date" :max="today" v-model="selectedDate" />
    </div>
    <button @click="addCompletedHabits">Completed</button>
    <div class="habits-list">
      <div v-for="completed in completedHabits" :key="completed.date">
        <div>{{ completed.date }}</div>
        <ul>
          <li v-for="(habit, index) in completed.habits" :key="index">
            {{ habit }}
            <button
              style="background-color: transparent; border: none"
              @click="deleteHabit(completed.date, index)"
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.habit-header {
  background-color: #f7f7f7;
  color: #333;
  text-align: center;
  padding: 10px 0;
  border-bottom: 2px solid #e0e0e0;
  font-size: 22px;
  margin-bottom: 20px;
  font-weight: 500;
  letter-spacing: 1.2px;
}

.habit-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 2px solid #ccc;
}

label {
  white-space: nowrap;
}

button {
  margin-top: 10px;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  background-color: #ffc60b;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #007bff;
}

.habits-list > div {
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.fa-solid {
  font-size: 16px;
  color: #333;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
}

select,
input {
  margin-right: 10px;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.date-container {
  margin-top: 10px;
}
</style>

<script>
import { ref, onMounted, computed } from "vue";

export default {
  setup() {
    const newHabit = ref("");
    const selectedHabits = ref([]);
    const selectedDate = ref("");
    const completedHabits = ref([]);

    let storedHabits = localStorage.getItem("habits");
    const habits = ref(storedHabits ? JSON.parse(storedHabits) : []);

    onMounted(() => {
      let storedCompletedHabits = localStorage.getItem("completedHabits");
      if (storedCompletedHabits) {
        completedHabits.value = JSON.parse(storedCompletedHabits);
      }
    });

    function updateLocalStorage() {
      localStorage.setItem("habits", JSON.stringify(habits.value));
      localStorage.setItem(
        "completedHabits",
        JSON.stringify(completedHabits.value)
      );
    }

    function addHabit() {
      if (newHabit.value.trim() !== "") {
        habits.value.push({
          id: habits.value.length,
          text: newHabit.value,
        });
        newHabit.value = "";
        updateLocalStorage();
      }
    }

    function addCompletedHabits() {
      if (selectedHabits.value.length && selectedDate.value) {
        const existingEntry = completedHabits.value.find(
          (entry) => entry.date === selectedDate.value
        );
        if (existingEntry) {
          // If the date already exists, merge habits without duplicating them
          existingEntry.habits = [
            ...new Set([...existingEntry.habits, ...selectedHabits.value]),
          ];
        } else {
          // Else create a new entry for the new habit
          completedHabits.value.push({
            date: selectedDate.value,
            habits: [...selectedHabits.value],
          });
        }
        selectedHabits.value = [];
        updateLocalStorage();
      }
    }

    function deleteHabit(date, habitIndex) {
      const dateEntry = completedHabits.value.find(
        (entry) => entry.date === date
      );
      if (dateEntry) {
        dateEntry.habits.splice(habitIndex, 1);
        if (dateEntry.habits.length === 0) {
          // If no habits left for a date, remove the date too
          completedHabits.value = completedHabits.value.filter(
            (entry) => entry.date !== date
          );
        }
        updateLocalStorage();
      }
    }

    const today = computed(() => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      let month = currentDate.getMonth() + 1;
      let day = currentDate.getDate();

      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;

      return `${day}-${month}-${year}`;
    });

    return {
      newHabit,
      selectedHabits,
      habits,
      addHabit,
      selectedDate,
      completedHabits,
      today,
      addCompletedHabits,
      deleteHabit,
    };
  },
};
</script>
