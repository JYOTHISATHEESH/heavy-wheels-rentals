<template>
  <footer>
    <div class="footer-content">
      <p>&copy; 2024 Heavy Wheels Rentals LLC. All rights reserved.</p>
      <div class="social-icons">
        <a href="https://www.facebook.com/yourpage" target="_blank" aria-label="Facebook">
          <img src="../assets/facebook-icon.svg" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/yourpage" target="_blank" aria-label="Instagram">
          <img src="../assets/instagram-icon.svg" alt="Instagram" />
        </a>
        <a href="https://twitter.com/yourpage" target="_blank" aria-label="Twitter">
          <img src="../assets/twitter-icon.svg" alt="Twitter" />
        </a>
        <a href="https://www.snapchat.com/add/yourpage" target="_blank" aria-label="Snapchat">
          <img src="../assets/snapchat-icon.svg" alt="Snapchat" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter'
};
</script>

<style scoped>
/* General Footer Styles */
footer {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-size: 1em;
}

footer p {
  margin-bottom: 15px;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/* Social Media Icons */
.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.social-icons a {
  margin: 0 10px;
  display: inline-block;
}

.social-icons img {
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.social-icons img:hover {
  transform: scale(1.1);
  filter: brightness(1.2);
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  footer {
    font-size: 0.9em;
  }

  .social-icons {
    margin-top: 10px;
  }

  .social-icons a {
    margin: 0 15px;
  }
}
</style>
