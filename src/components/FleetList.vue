<template>
  <section id="fleet">
    <h2>Our Fleet</h2>
    <div class="carousel">
      <img v-for="(image, index) in fleetImages" :key="index" :src="image" :alt="'Fleet Vehicle ' + (index + 1)" :class="{'active': activeFleetIndex === index}" />
    </div>
    <p>We offer a wide range of heavy vehicles to meet your needs:</p>
    <ul>
      <li>Flatbed Trucks</li>
      <li>Dump Trucks</li>
      <li>Bulldozers</li>
      <li>Forklifts</li>
      <li>Crane Trucks</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'FleetList',
  data() {
    return {
      fleetImages: [
        require('../assets/dozerimg.jpg'),
        require('../assets/exavatorimg.jpg'),
        require('../assets/shovelimg.jpg')
      ],
      activeFleetIndex: 0
    };
  },
  mounted() {
    setInterval(() => {
      this.activeFleetIndex = (this.activeFleetIndex + 1) % this.fleetImages.length;
    }, 3000); // Change image every 3 seconds
  }
};
</script>

<style scoped>
/* Styles for Fleet Section */
#fleet {
  text-align: center;
  margin: 0 auto;
}

/* Carousel container styling */
.carousel {
  position: relative;
  width: 100%;
  max-width: 1200px; /* Optional: Max width for large screens */
  height: 400px; /* Adjust the height based on your preference */
  margin: 20px auto;
  overflow: hidden;
  border-radius: 10px; /* Optional: Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Optional: Add subtle shadow */
}

/* Image styling for carousel */
.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the area without distorting */
  opacity: 0;
  transition: opacity 0.5s ease;
}

.carousel img.active {
  opacity: 1; /* Show the active image */
}

/* Styling for list of fleet vehicles */
ul {
  list-style-type: none;
  padding: 0;
  font-size: 1.2em;
  margin-top: 20px;
}

ul li {
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
}

ul li:last-child {
  border-bottom: none;
}

/* Optional: Styling for section heading */
h2 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
}
</style>
