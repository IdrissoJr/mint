<template>
  <footer
    class="bg-black text-white flex items-center justify-between px-5 py-3"
  >
    <div class="flex justify-left items-center">
      <img class="h-9" src="../assets/logo-white.svg" alt="logo img" />
      <!-- ❤️ -->
      <p class="ml-3">© 2020 Mint - Made with &#128525; by Disso</p>
    </div>

    <div>
      <button
        type="button"
        class="text-xs hover:text-yellow-400"
        @click="$emit('scroll-top')"
      >
        Back to top<span class="text-base">&nbsp;&#x2191;</span>
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
