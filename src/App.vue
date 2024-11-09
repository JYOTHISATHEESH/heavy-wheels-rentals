<template>
  <div>
    <Header />
    <Home />
    <Services />
    <Fleet />
    <Gallery />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from './components/PageHeader.vue';
import Home from './components/HomePage.vue';
import Services from './components/ServicesList.vue';
import Fleet from './components/FleetList.vue';
import Gallery from './components/PhotoGallery.vue';
import Contact from './components/ContactForm.vue';
import Footer from './components/PageFooter.vue';

export default {
  components: {
    Header,
    Home,
    Services,
    Fleet,
    Gallery,
    Contact,
    Footer
  }
};
</script>