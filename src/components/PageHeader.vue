<template>
  <header>
    <div class="logo">
      <img src="../assets/logo.png" alt="Heavy Wheels Rentals LLC Logo" width="150" />
    </div>
    <h1>Heavy Wheels Rentals LLC</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#fleet">Fleet</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'PageHeader'
};
</script>

<style scoped>
/* General Styles for Header */
header {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

header .logo img {
  width: 150px;  /* Logo width */
  height: auto;
}

header h1 {
  font-size: 2em;
  font-weight: 600;
  color: #fff;
  margin: 0;
  flex-grow: 1;
  text-align: center;
}

nav {
  display: flex;
  align-items: center;
}

nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin: 0 20px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 1.2em;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
}

nav ul li a:hover {
  color: #f39c12;  /* Highlight color on hover */
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  header {
    flex-direction: column;
    text-align: center;
  }

  header h1 {
    font-size: 1.8em;
    margin-bottom: 15px;
  }

  nav ul {
    flex-direction: column;
    margin-top: 10px;
  }

  nav ul li {
    margin: 10px 0;
  }

  .logo img {
    width: 120px;
  }
}
</style>
