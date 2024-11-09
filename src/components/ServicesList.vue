<template>
  <section id="services">
    <h2>Our Services</h2>
    <div class="carousel">
      <img v-for="(image, index) in serviceImages" :key="index" :src="image" :alt="'Service ' + (index + 1)" :class="{'active': activeServiceIndex === index}" />
    </div>
    <ul>
      <li>Truck Rentals</li>
      <li>Excavator Rentals</li>
      <li>Loader Rentals</li>
      <li>Transport Services</li>
      <li>Long-term Rentals</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ServicesList',
  data() {
    return {
      serviceImages: [
        require('../assets/service1.jpg'),
        require('../assets/service2.jpg'),
        require('../assets/service3.jpg')
      ],
      activeServiceIndex: 0
    };
  },
  mounted() {
    setInterval(() => {
      this.activeServiceIndex = (this.activeServiceIndex + 1) % this.serviceImages.length;
    }, 3000); // Change image every 3 seconds
  }
};
</script>

<style scoped>
/* General Styles for the Services Section */
#services {
  text-align: center;
  margin: 0 auto;
  padding: 20px;
  max-width: 1200px;
}

h2 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
}

/* Carousel Container */
.carousel {
  position: relative;
  width: 100%;
  max-width: 1200px;  /* Optional: Max width for larger screens */
  height: 400px;      /* Set a fixed height for the carousel */
  margin: 20px auto;
  overflow: hidden;
  border-radius: 10px; /* Optional: Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Optional: Add a shadow */
}

/* Styling for each image inside the carousel */
.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;  /* Ensure the image covers the whole area without distortion */
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.carousel img.active {
  opacity: 1;  /* Display only the active image */
}

/* Services List Styles */
ul {
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
  font-size: 1.2em;
  color: #555;
}

ul li {
  margin: 10px 0;
  text-transform: capitalize;
}

ul li::before {
  content: '✔';
  margin-right: 10px;
  color: #4CAF50;
}

@media (max-width: 768px) {
  h2 {
    font-size: 2em;
  }

  .carousel {
    height: 250px;  /* Adjust height for mobile devices */
  }

  ul {
    font-size: 1em;
  }
}
</style>
