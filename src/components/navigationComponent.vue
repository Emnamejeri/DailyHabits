<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">
        <i class="fa-solid fa-lines-leaning"></i>DayCrafter</a
      >
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search by Habit"
          aria-label="Search"
        />
        <button class="btn btn-outline-info" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>
<style scoped>
.navbar.bg-body-tertiary {
  background-color: #e3f2fd;
  font-weight: bold;
}
.navbar.bg-body-tertiary a {
  color: #0c356a; /* Explicitly setting the color for anchor tags within the navbar */
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
