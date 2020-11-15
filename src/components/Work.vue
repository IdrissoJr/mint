<template>
  <article id="work">
    <h2 class="text-5xl font-bold uppercase">Work Showcase.</h2>

    <div class="mt-10 mb-12 mx-2 md:flex md:justify-between md:items-center">
      <ul id="preview-filter" class="uppercase text-xs">
        <li
          @click="filterCatergories"
          class="hover:bg-yellow-400 px-3 py-1 inline-block bg-yellow-400"
        >
          All
        </li>
        <li
          @click="filterCatergories"
          class="hover:bg-yellow-400 px-3 py-1 inline-block ml-2"
        >
          Branding
        </li>
        <li
          @click="filterCatergories"
          class="hover:bg-yellow-400 px-3 py-1 inline-block ml-2"
        >
          Illustrations
        </li>
        <li
          @click="filterCatergories"
          class="hover:bg-yellow-400 px-3 py-1 inline-block ml-2"
        >
          Web
        </li>
      </ul>

      <div class="relative text-center cursor-pointer mt-8 md:mt-0">
        <button
          class="uppercase text-sm z-20 relative"
          @click="dropdownOpen = !dropdownOpen"
        >
          {{ blogNewest ? "Newest" : "Oldest" }} First &#11167;
        </button>
        <button
          v-if="dropdownOpen"
          @click="dropdownOpen = false"
          class="fixed inset-0 w-full h-full z-10 cursor-default"
          tabindex="-1"
        ></button>
        <ul
          v-if="dropdownOpen"
          class="absolute right-0 z-20 bg-lightgray rounded mt-2 shadow-md"
        >
          <li class="hover:bg-yellow-400 w-full px-8 py-3" @click="reOrder">
            Newest
          </li>
          <li class="hover:bg-yellow-400 w-full px-8 py-3" @click="reOrder">
            Oldest
          </li>
        </ul>
      </div>
    </div>

    <div id="previews-container">
      <div
        class="work-preview visible mb-6 px-6 sm:px-2 w-full sm:w-1/2 md:w-1/3"
        v-for="(preview, index) in previews"
        :key="index"
      >
        <img
          :src="require('../assets/' + preview.img + '.png')"
          alt="Preview"
          class="w-full"
        />
        <div class="hover-preview">
          <div class="h-full flex flex-col justify-center items-center">
            <h3 class="text-2xl font-bold uppercase">
              {{ preview.name }}
            </h3>
            <p class="text-base uppercase">
              {{ preview.cat }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <button
      type="button"
      class="bg-yellow-400 py-4 px-8 mt-6 uppercase font-bold border-solid border-2 border-yellow-400 hover:bg-white block m-auto"
      @click="contactUs"
    >
      Have work for us?
    </button>

    <div class="bg-lightgray mt-20">
      <!-- Using the slider component -->
      <slider ref="slider" :options="options">
        <!-- slideritem wrapped package with the components you need -->
        <slideritem
          v-for="(partner, index) in partners"
          :key="index"
          class="py-16"
        >
          <div class="w-full">
            <img
              class="w-3/5 block m-auto"
              :src="require('../assets/' + partner.img + '.svg')"
              alt="partner img"
            />
          </div>
        </slideritem>
        <!-- Customizable loading -->
        <div slot="loading">loading...</div>
      </slider>
    </div>
  </article>
</template>

<script>
// import slider components
import { slider, slideritem } from "vue-concise-slider";
import Masonry from "masonry-layout";

export default {
  name: "Work",
  components: {
    slider,
    slideritem,
  },
  data() {
    return {
      dropdownOpen: false,
      blogNewest: true,
      previews: [
        {
          img: "preview1",
          name: "Lamb",
          cat: "Branding",
        },
        {
          img: "preview2",
          name: "Smartwatch",
          cat: "Web",
        },
        {
          img: "preview3",
          name: "Speakerphone",
          cat: "Illustrations",
        },
        {
          img: "preview4",
          name: "Sneakers",
          cat: "Web",
        },
        {
          img: "preview5",
          name: "Label",
          cat: "Illustrations",
        },
        {
          img: "preview6",
          name: "Lemons",
          cat: "Branding",
        },
      ],
      filterPreviews: [],
      //data list [array]
      partners: [
        {
          img: "partner1",
        },
        {
          img: "partner2",
        },
        {
          img: "partner3",
        },
        {
          img: "partner4",
        },
        {
          img: "partner5",
        },
        {
          img: "partner6",
        },
      ],
      //Slider configuration [obj]
      options: {
        currentPage: 0,
        loop: true,
        pagination: false,
        loopedSlides: 5,
        autoplay: 3000,
      },
    };
  }, //data

  methods: {
    contactUs() {
      window.scrollTo({
        top: document.getElementById("contact").offsetTop,
        behavior: "smooth",
      });
    },
    filterCatergories(e) {
      var cats = document
        .getElementById("preview-filter")
        .getElementsByClassName("hover:bg-yellow-400");

      // [].forEach.call(cats, function(el) {
      //   if (el.innerHTML !== e.target.innerHTML) {
      //     el.classList.remove("bg-yellow-400");
      //   } else {
      //     el.classList.add("bg-yellow-400");
      //   }
      // });
      for (let i = 0; i < cats.length; i++) {
        if (cats[i].innerHTML !== e.target.innerHTML) {
          cats[i].classList.remove("bg-yellow-400");
        } else {
          cats[i].classList.add("bg-yellow-400");
        }
      }

      var previews = document
        .getElementById("previews-container")
        .getElementsByClassName("work-preview");

      for (let i = 0; i < previews.length; i++) {
        if (
          e.target.innerHTML.trim() === this.previews[i].cat ||
          e.target.innerHTML.trim() === "All"
        ) {
          previews[i].classList.remove("hidden");
          previews[i].classList.add("visible");
        } else {
          previews[i].classList.add("hidden");
          previews[i].classList.remove("visible");
        }
      }

      this.msnry = new Masonry("#previews-container", {
        itemSelector: ".work-preview.visible",
      });
      this.msnry.reloadItems();
    },
    reOrder() {
      this.dropdownOpen = false;
      this.blogNewest = !this.blogNewest;

      this.previews.reverse();

      var previews = document
          .getElementById("previews-container")
          .getElementsByClassName("work-preview"),
        activeTab = document
          .getElementById("preview-filter")
          .querySelector(".bg-yellow-400")
          .innerHTML.trim();

      for (let i = 0; i < previews.length; i++) {
        if (activeTab === this.previews[i].cat || activeTab === "All") {
          previews[i].classList.remove("hidden");
          previews[i].classList.add("visible");
        } else {
          previews[i].classList.add("hidden");
          previews[i].classList.remove("visible");
        }
      }

      this.msnry = new Masonry("#previews-container", {
        itemSelector: ".work-preview.visible",
      });

      setTimeout(function() {
        var msnry = new Masonry("#previews-container", {
          itemSelector: ".work-preview.visible",
        });
        msnry.reloadItems();
      }, 10);
    },
  }, //methods
  created() {
    const HandleEscape = (e) => {
      if (e.key === "Esc" || e.key === "Escape") {
        this.dropdownOpen = false;
      }
    };

    document.addEventListener("keydown", HandleEscape);

    // to clean up from the memory
    this.$once("hook:beforeDestroy", () => {
      document.removeEventListener("keydown", HandleEscape);
    });
  }, //created
  mounted() {
    setTimeout(function() {
      var msnry = new Masonry("#previews-container", {
        itemSelector: ".work-preview",
      });
      msnry.reloadItems();
    }, 700);

    setTimeout(function() {
      if (document.getElementById("previews-container").offsetHeight < 100) {
        var msnry = new Masonry("#previews-container", {
          itemSelector: ".work-preview",
        });
        msnry.reloadItems();
      }
    }, 5000);
  },
};
</script>

<style lang="scss">
#work {
  padding-bottom: 3rem;
}

#work #preview-filter li {
  cursor: pointer;
}

#work .work-preview {
  cursor: pointer;
  position: relative;
  &:hover .hover-preview {
    opacity: 1;
  }
}

#work .hover-preview {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0.5rem;
  right: 0.5rem;
  background-color: rgba(246, 224, 94, 0.9);
  opacity: 0;
  transition: 0.3s ease-in-out;
}

#work .slider-item {
  width: 48.5% !important;
}
//sm
@media (min-width: 639px) {
  #work .slider-item {
    width: 31.5% !important;
  }
}
//md
@media (min-width: 768px) {
  #work .slider-item {
    width: 23.5% !important;
  }
}
//lg
@media (min-width: 1024px) {
  #work .slider-item {
    width: 19.5% !important;
  }
}
</style>
