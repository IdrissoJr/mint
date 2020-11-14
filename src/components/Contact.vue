<template>
  <article id="contact">
    <h2 class="text-5xl font-bold uppercase">Contact Us.</h2>
    <p class="mt-8 mb-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt
    </p>
    <p class="mb-16">ut labore et dolore magna aliqua.</p>

    <div class="flex flex-wrap pt-4">
      <div class="w-full md:w-1/2 pr-4">
        <h3 class="text-3xl font-bold md:mt-8 md:mb-8">Send Us Message.</h3>
        <input
          class="block w-full bg-lightgray my-2 px-4 py-3 border-white focus:border-yellow-400 border-2 placeholder-gray-700"
          type="text"
          placeholder="Name"
        />
        <input
          class="block w-full bg-lightgray my-2 px-4 py-3 border-white focus:border-yellow-400 border-2 placeholder-gray-700"
          type="email"
          placeholder="Email"
        />
        <textarea
          class="block w-full bg-lightgray mb-4 px-4 py-3 border-white focus:border-yellow-400 border-2 placeholder-gray-700"
          name="msg"
          rows="7"
          placeholder="Message"
        ></textarea>
        <button
          type="button"
          class="bg-yellow-400 py-4 px-8 uppercase font-bold text-xs border-solid border-2 border-yellow-400 hover:bg-white"
        >
          Send Message
        </button>
      </div>

      <div class="w-full md:w-1/2 mt-8 md:mt-0">
        <img src="../assets/contact1.png" alt="Agency" class="w-full h-full" />
      </div>

      <!-- Icons -->
      <div class="w-full md:w-2/5 text-center mt-16 md:mt-20">
        <img
          class="m-auto mb-4"
          src="../assets/contact-icon1.svg"
          alt="icon1"
        />
        <p>1211 Awesome Avenue,</p>
        <p>NY USD</p>
      </div>
      <div class="w-full md:w-1/5 text-center mt-16 md:mt-20">
        <img
          class="m-auto mb-4"
          src="../assets/contact-icon2.svg"
          alt="icon2"
        />
        <p>+00 123 - 456 -78</p>
        <p>+00 987 - 654 -32</p>
      </div>
      <div class="w-full md:w-2/5 text-center mt-16 md:mt-20">
        <img
          class="m-auto mb-4"
          src="../assets/contact-icon3.svg"
          alt="icon3"
        />
        <p>mint@mintmail.com</p>
      </div>

      <!-- Social Media -->
      <div class="w-full text-center">
        <img
          class="m-auto h-6 md:inline-block md:w-1/6 mt-16 social-links"
          src="../assets/facebook.svg"
          alt="facebook"
        />
        <img
          class="m-auto h-6 md:inline-block md:w-1/6 mt-16 social-links"
          src="../assets/twitter.svg"
          alt="twitter"
        />
        <img
          class="m-auto h-6 md:inline-block md:w-1/6 mt-16 social-links"
          src="../assets/dribble.svg"
          alt="dribble"
        />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style lang="scss" scoped>
.social-links {
  transition: 0.1s ease-in-out filter;
  cursor: pointer;
}

.social-links:hover {
  filter: invert(77%) sepia(99%) saturate(652%) hue-rotate(354deg)
    brightness(98%) contrast(111%);
  -webkit-filter: invert(77%) sepia(99%) saturate(652%) hue-rotate(354deg)
    brightness(98%) contrast(111%);
}
</style>
