<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">
        <i class="fa-solid fa-lines-leaning" style="margin-right: 10px"></i
        >Habits Tracker</a
      >
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search by Habit"
          aria-label="Search"
          disabled
        />
        <button class="btn btn-outline-info" type="submit" disabled>
          Search
        </button>
      </form>
    </div>
  </nav>
</template>
<style scoped>
.navbar.bg-body-tertiary {
  background-color: #e3f2fd !important;
  font-weight: bold;
}
.navbar.bg-body-tertiary a {
  color: #0c356a;
}
.navbar-brand {
  font-family: "Borel", cursive;
  font-weight: bold;
  font-size: 38px;
}
</style>
<script>
export default {
  name: "navigationComponent",
};
</script>
