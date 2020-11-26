<template>
  <header
    class="fixed w-full bg-white sm:flex sm:justify-between sm:items-center sm:pl-5 sm:py-3"
  >
    <div class="flex items-center justify-between px-5 py-3 sm:p-0">
      <div>
        <img
          src="../assets/logo.svg"
          @click="$emit('scroll-top')"
          class="h-8 md:h-12 cursor-pointer"
          alt="logo img"
        />
      </div>
      <div class="sm:hidden">
        <button
          type="button"
          class="block text-gray-900 hover:text-yellow-500"
          @click.prevent="isOpen = !isOpen"
        >
          <svg
            class="h-8 w-8 fill-current"
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
            <rect v-show="!isOpen" width="100" height="20"></rect>
            <rect v-show="!isOpen" y="30" width="100" height="20"></rect>
            <rect v-show="!isOpen" y="60" width="100" height="20"></rect>
            <rect v-show="isOpen" y="30" width="100" height="20"></rect>
          </svg>
        </button>
      </div>
    </div>

    <div
      id="links-container"
      class="px-3 pb-3 pt-1 sm:block sm:flex sm:justify-between sm:items-center sm:p-0"
      :class="isOpen ? 'block' : 'hidden'"
    >
      <a
        href="#work"
        class="block hover:text-yellow-400 px-2 sm:px-5 py-1"
        @click.prevent="tabActive"
        >Work</a
      >
      <a
        href="#about"
        class="block hover:text-yellow-400 px-2 sm:ml-4 sm:px-5 py-1 mt-1 sm:mt-0"
        @click.prevent="tabActive"
        >About</a
      >
      <a
        href="#blog"
        class="block hover:text-yellow-400 px-2 sm:ml-4 sm:px-5 py-1 mt-1 sm:mt-0"
        @click.prevent="tabActive"
        >Blog</a
      >
      <a
        href="#contact"
        class="block hover:text-yellow-400 px-2 sm:ml-4 sm:px-5 py-1 mt-1 sm:mt-0"
        @click.prevent="tabActive"
        >Contact</a
      >
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    tabActive(e) {
      if (e.target.innerHTML.trim() == "Work") {
        window.scrollTo({
          top: document.getElementById("work").offsetTop,
          behavior: "smooth",
        });
      } else if (e.target.innerHTML.trim() == "About") {
        window.scrollTo({
          top: document.getElementById("about").offsetTop,
          behavior: "smooth",
        });
      } else if (e.target.innerHTML.trim() == "Blog") {
        window.scrollTo({
          top: document.getElementById("blog").offsetTop,
          behavior: "smooth",
        });
      } else if (e.target.innerHTML.trim() == "Contact") {
        window.scrollTo({
          top: document.getElementById("contact").offsetTop,
          behavior: "smooth",
        });
      }

      let links = document
        .getElementById("links-container")
        .querySelectorAll("a");
      for (let i = 0; i < links.length; i++) {
        if (links[i] === e.target) {
          e.target.classList.add("clicked");
        } else {
          links[i].classList.remove("clicked");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  z-index: 99;
}

a.clicked {
  color: #f6e05e;
}
</style>
