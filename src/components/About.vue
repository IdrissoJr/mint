<template>
  <article id="about">
    <h2 class="text-5xl font-bold uppercase">About Us.</h2>
    <p class="mt-8 mb-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt
    </p>
    <p class="mb-16">ut labore et dolore magna aliqua.</p>
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/3 my-8 md:my-0 bg-lightgray">
        <div class="relative inline-block mx-8 sm:mx-20 md:mx-0">
          <img class="h-full" src="../assets/about1.png" alt="person1" />
          <div class="absolute bottom-0 left-0 bg-yellow-400 py-3 px-4 w-3/4">
            <h3 class="text-lx font-bold">Luke Skywalker</h3>
            <p class="text-white mt-2">Web Designer</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 my-8 md:my-0 bg-lightgray">
        <div class="relative inline-block mx-8 sm:mx-20 md:mx-0">
          <img class="h-full" src="../assets/about2.png" alt="person2" />
          <div class="absolute bottom-0 left-0 bg-yellow-400 py-3 px-4 w-3/4">
            <h3 class="text-lx font-bold">Han Solo</h3>
            <p class="text-white mt-2">Graphic Designer</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 bg-lightgray p-16 md:p-8 lg:p-16">
        <h3 class="font-bold">Little About Us</h3>
        <p class="py-4 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod temp orincididunt ut labore et dolore magna aliqua.
        </p>
        <button class="hover:text-yellow-400 text-xs">
          Read More
        </button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "About",
};
</script>
