<template>
  <section id="home">
    <h2>Your Reliable Partner for Heavy Vehicle Rentals in the UAE</h2>
    <div class="carousel">
      <img v-for="(image, index) in homeImages" :key="index" :src="image" :alt="'Heavy Vehicle ' + (index + 1)" :class="{'active': activeImageIndex === index}" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      homeImages: [
        require('../assets/image1.jpg'),
        require('../assets/image2.png'),
        require('../assets/image3.jpg')
      ],
      activeImageIndex: 0
    };
  },
  mounted() {
    setInterval(() => {
      this.activeImageIndex = (this.activeImageIndex + 1) % this.homeImages.length;
    }, 3000); // Change image every 3 seconds
  }
};
</script>

<style scoped>
/* Styles for the Home Section */
#home {
  text-align: center;
  margin: 0 auto;
}

/* Carousel styling */
.carousel {
  position: relative;
  width: 100%;
  max-width: 1200px; /* Optional: Max width for large screens */
  height: 400px; /* Adjust the height based on your preference */
  margin: 20px auto;
  overflow: hidden;
  border-radius: 10px; /* Optional: Rounded corners */
}

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

h2 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
}
</style>
