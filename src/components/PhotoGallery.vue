<template>
  <section id="gallery">
    <h2>Photo Gallery</h2>
    <div class="carousel">
      <img v-for="(image, index) in galleryImages" :key="index" :src="image" :alt="'Gallery Image ' + (index + 1)" :class="{'active': activeGalleryIndex === index}" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'PhotoGallery',
  data() {
    return {
      galleryImages: [
        require('../assets/gallery1.jpg'),
        require('../assets/gallery2.jpg'),
        require('../assets/gallery3.jpg')
      ],
      activeGalleryIndex: 0
    };
  },
  mounted() {
    setInterval(() => {
      this.activeGalleryIndex = (this.activeGalleryIndex + 1) % this.galleryImages.length;
    }, 3000); // Change image every 3 seconds
  }
};
</script>

<style scoped>
/* Gallery Section Styling */
#gallery {
  text-align: center;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
}

/* Carousel container styling */
.carousel {
  position: relative;
  width: 100%;
  max-width: 1200px; /* Optional: Max width for large screens */
  height: 400px; /* Adjust the height based on your design */
  margin: 20px auto;
  overflow: hidden;
  border-radius: 10px; /* Optional: Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Optional: Subtle shadow */
}

/* Image styling for the carousel */
.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the container without stretching */
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.carousel img.active {
  opacity: 1; /* Show the active image */
}
</style>
