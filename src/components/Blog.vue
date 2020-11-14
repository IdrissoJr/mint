<template>
  <article id="blog" class="bg-gray-100 my-12">
    <h2 class="text-5xl font-bold uppercase">Our Blog.</h2>
    <p class="mt-8 mb-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt
    </p>
    <p class="mb-16">ut labore et dolore magna aliqua.</p>

    <!-- Using the slider component -->
    <slider ref="slider" :options="options">
      <!-- slideritem wrapped package with the components you need -->
      <slideritem
        v-for="(blog, index) in blogs"
        :key="index"
        :style="blog.style"
      >
        <div class="overflow-hidden bg-white mx-10 sm:mx-24 md:mx-0">
          <div class="relative blog-img">
            <img
              class="w-full"
              :src="require('../assets/blog' + ++index + '.png')"
              alt="blog img"
            />
            <div
              class="read-more absolute inset-0 w-full h-full flex flex-col justify-center"
            >
              <h3 class="uppercase font-bold text-3xl">Read More</h3>
            </div>
          </div>
          <div class="px-12 pt-12 pb-20 lg:text-left">
            <h3 class="font-bold text-xl uppercase">
              {{ blog.title }}
            </h3>
            <p class="text-base py-6">
              {{ blog.text }}
            </p>
            <p class="text-sm">{{ blog.date }}</p>
          </div>
        </div>
      </slideritem>
      <!-- Customizable loading -->
      <div slot="loading">loading...</div>
    </slider>
  </article>
</template>

<script>
// import slider components
import { slider, slideritem } from "vue-concise-slider";

export default {
  name: "Blog",
  components: {
    slider,
    slideritem,
  },
  data() {
    return {
      //data list [array]
      blogs: [
        {
          title: "Super Title!",
          text: "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
          date: "11 Nov 2020",
          style: {
            "margin-right": "2%",
          },
        },
        {
          title: "Blog Title!",
          text: "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
          date: "10 Nov 2020",
          style: {
            "margin-right": "2%",
          },
        },
        {
          title: "Blog Article!",
          text: "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
          date: "01 Dec 2020",
          style: {
            "margin-right": "2%",
          },
        },
        {
          title: "Awesome Title!",
          text: "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
          date: "07 Dec 2020",
          style: {
            "margin-right": "2%",
          },
        },
        {
          title: "Super Blog Article!",
          text: "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
          date: "29 Dec 2020",
          style: {
            "margin-right": "2%",
          },
        },
        {
          title: "Awesome Article!",
          text: "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
          date: "5 Jan 2021",
          style: {
            "margin-right": "2%",
          },
        },
      ],
      //Slider configuration [obj]
      options: {
        currentPage: 0,
        loop: true,
        pagination: false,
        loopedSlides: 3,
      },
    };
  },
};
</script>

<style lang="scss">
#blog .blog-img:hover .read-more {
  opacity: 1;
}

#blog .read-more {
  background-color: rgba(246, 224, 94, 0.9);
  opacity: 0;
  transition: 0.3s ease-in-out;
}

//md
@media (min-width: 768px) {
  #blog .slider-item {
    width: 48.5% !important;
  }
}
//lg
@media (min-width: 1024px) {
  #blog .slider-item {
    width: 31.5% !important;
  }
}
</style>
