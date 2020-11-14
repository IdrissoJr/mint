<template>
  <article class="flex flex-wrap">
    <div class="w-full md:w-1/2 px-1 md:px-0 mb-6 pb-4 md:mb-0 md:pb-0">
      <h2 class="text-5xl font-bold">Hello!!!</h2>
      <h2 class="text-5xl font-bold md:w-1/2">
        We Are Creative Digital Agency.
      </h2>
      <p class="py-6 my-2 md:pr-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <button
        type="button"
        class="bg-yellow-400 py-4 px-8 uppercase font-bold border-solid border-2 border-yellow-400 hover:bg-white"
        @click="contactUs"
      >
        Send Message
      </button>
    </div>

    <div class="w-full md:w-1/2 px-1 md:px-0">
      <img src="../assets/intro.png" alt="Agency" class="w-full h-full" />
    </div>
  </article>
</template>

<script>
export default {
  name: "Intro",
  methods: {
    contactUs() {
      window.scrollTo({
        top: document.getElementById("contact").offsetTop,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
article {
  padding-top: 8rem;
}
</style>
