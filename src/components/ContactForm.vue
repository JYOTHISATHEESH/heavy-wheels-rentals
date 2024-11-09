<template>
  <section id="contact">
    <h2>Contact Us</h2>
    <p>For inquiries or more information, feel free to reach out to us:</p>
    <div class="contact-info">
      <div class="info-item">
        <h3>Email</h3>
        <p><a href="mailto:info@heavywheelsrentals.ae">info@heavywheelsrentals.ae</a></p>
      </div>
      <div class="info-item">
        <h3>Phone</h3>
        <p>+971 50 54 12675</p>
      </div>
      <div class="info-item">
        <h3>Address</h3>
        <p>Abu Dhabi, Dubai, UAE</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactForm'
};
</script>

<style scoped>
/* Style for Contact Us Section */
#contact {
  background-color: #f8f8f8;
  padding: 40px;
  text-align: center;
  font-family: 'Arial', sans-serif;
  color: #333;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

p {
  font-size: 1rem;
  margin-bottom: 15px;
  line-height: 1.6;
  color: #666;
}

a {
  color: #007BFF;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}

/* Styling for contact info layout */
.contact-info {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin-top: 20px;
}

.info-item {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.info-item:hover {
  transform: translateY(-10px);
}

.info-item h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #007BFF;
}

.info-item p {
  font-size: 1rem;
  color: #333;
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
  .contact-info {
    grid-template-columns: 1fr; /* Stack items vertically on smaller screens */
  }
}
</style>
