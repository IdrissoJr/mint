<template>
  <div id="app" class="text-center md:text-left">
    <Navbar @scroll-top="scrollTop"></Navbar>
    <Intro></Intro>
    <Work></Work>
    <About></About>
    <Blog></Blog>
    <Contact></Contact>
    <Footer @scroll-top="scrollTop"></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Intro from "@/components/Intro.vue";
import Work from "@/components/Work.vue";
import About from "@/components/About.vue";
import Blog from "@/components/Blog.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: { Navbar, Intro, Work, About, Blog, Contact, Footer },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleScroll() {
      var currentScroll = document.documentElement.scrollTop,
        navLinks = document
          .getElementById("links-container")
          .querySelectorAll("a"),
        workOffset = document.getElementById("work").offsetTop - 50,
        aboutOffset = document.getElementById("about").offsetTop - 50,
        blogOffset = document.getElementById("blog").offsetTop - 50,
        contactOffset = document.getElementById("contact").offsetTop - 50;

      if (currentScroll < workOffset) {
        for (let i = 0; i < navLinks.length; i++) {
          navLinks[i].classList.remove("text-yellow-400");
        }
      } else if (currentScroll > workOffset && currentScroll < aboutOffset) {
        navLinks[0].classList.add("text-yellow-400");
        for (let i = 0; i < navLinks.length; i++) {
          if (i != 0) {
            navLinks[i].classList.remove("text-yellow-400");
          }
        }
      } else if (currentScroll > aboutOffset && currentScroll < blogOffset) {
        navLinks[1].classList.add("text-yellow-400");
        for (let i = 0; i < navLinks.length; i++) {
          if (i != 1) {
            document
              .getElementById("links-container")
              .querySelectorAll("a")
              [i].classList.remove("text-yellow-400", "clicked");
          }
        }
      } else if (currentScroll > blogOffset && currentScroll < contactOffset) {
        navLinks[2].classList.add("text-yellow-400");
        for (let i = 0; i < navLinks.length; i++) {
          if (i != 2) {
            navLinks[i].classList.remove("text-yellow-400");
          }
        }
      } else if (currentScroll > contactOffset) {
        navLinks[3].classList.add("text-yellow-400");
        for (let i = 0; i < navLinks.length; i++) {
          if (i != 3) {
            navLinks[i].classList.remove("text-yellow-400");
          }
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import url("./assets/tailwind.css");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap");

#app {
  font-family: "Montserrat", sans-serif;
  color: #212a34;
}

article {
  padding: 4.5rem 1.25rem;
}

button:focus,
input:focus,
textarea:focus {
  outline: none;
}

p {
  font-size: 0.75rem;
}

.bg-lightgray {
  background-color: #fbfbfb;
}

.slider-container {
  white-space: normal !important;
}

.slider-wrapper {
  cursor: grab;
}

.slider-item {
  color: unset !important;
}
</style>
