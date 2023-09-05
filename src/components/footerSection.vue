<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2023 DayCrafter -- All rights reserved.</p>
      <div id="social-icons">
        <a href="https://www.facebook.com/yourpage" target="_blank">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.twitter.com/yourpage" target="_blank">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/yourpage" target="_blank">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  </footer>
</template>
<style scoped>
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.content {
  flex: 1;
}

.footer {
  border: 2px yellow solid;
  background-color: #e3f2fd;
  color: black;
  font-weight: bold;
  padding: 20px;
  margin-bottom: 1vh;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#social-icons a {
  margin: 0 10px;
  color: #ffc60b;
  font-size: 24px;
  text-decoration: none;
  transition: color 0.3s ease;
}

#social-icons a:hover {
  color: #176b87;
}
</style>
<script>
export default {
  name: "footerSection",
};
</script>
