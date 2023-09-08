<script>
import { ref, onMounted, computed } from "vue";
import NavigationComponent from "./navigationComponent.vue";
import FooterSection from "./footerSection.vue";

export default {
  name: "daysContent",
  components: {
    NavigationComponent,
    FooterSection,
  },
  setup() {
    const newHabit = ref("");
    const selectedHabits = ref([]); // To store multiple selected habits
    const selectedDate = ref("");
    const completedHabits = ref([]); // To store the selected habits with their dates

    // Declare habits ref here
    let storedHabits = localStorage.getItem("habits");
    const habits = ref(storedHabits ? JSON.parse(storedHabits) : []);

    // Load habits and completedHabits from localStorage on component mount
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
          // If the date already exists, merge habits without duplicating
          existingEntry.habits = [
            ...new Set([...existingEntry.habits, ...selectedHabits.value]),
          ];
        } else {
          // Else create a new entry
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
          // If no habits left for a date, remove the date entry too
          completedHabits.value = completedHabits.value.filter(
            (entry) => entry.date !== date
          );
        }
        updateLocalStorage();
      }
    }

    // Compute today's date in 'YYYY-MM-DD' format
    const today = computed(() => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      let month = currentDate.getMonth() + 1;
      let day = currentDate.getDate();

      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;

      return `${year}-${month}-${day}`;
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
