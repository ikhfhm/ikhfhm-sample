<template>
  <div
    class="h-screen font-ubuntu text-white text-center w-full bg-primary fixed z-20"
  >
    <div @click="goBack" class="flex justify-end py-5 px-5">
      <Close class="" />
    </div>
    <div class="flex justify-center pt-4 pb-8" @click="goToHome">
      <img src="../../assets/logo.png" class="cursor-pointer h-7" />
    </div>
    <div class="py-5 px-5">
      <router-link to="/" v-slot="{ isActive, isExactActive, href }">
        <a :href="href" @click="goToHome">
          <template v-if="isActive || isExactActive">
            <p class="cursor-pointer font-bold text-3xl">
              home
            </p>
          </template>
          <template v-else>
            <p class="cursor-pointer text-3xl">home</p>
          </template>
        </a>
      </router-link>
    </div>
    <div class="py-5 px-5">
      <router-link to="/about" v-slot="{ isActive, isExactActive, href }">
        <a :href="href" @click="goToAbout">
          <template v-if="isActive || isExactActive">
            <p class="cursor-pointer font-bold text-3xl">
              about
            </p>
          </template>
          <template v-else>
            <p class="cursor-pointer text-3xl">about</p>
          </template>
        </a>
      </router-link>
    </div>
    <div class="py-5 px-5">
      <router-link to="/portfolio" v-slot="{ isActive, isExactActive, href }">
        <a :href="href" @click="goToPortfolio">
          <template v-if="isActive || isExactActive">
            <p class="cursor-pointer font-bold text-3xl">
              portfolio
            </p>
          </template>
          <template v-else>
            <p class="cursor-pointer text-3xl">portfolio</p>
          </template>
        </a>
      </router-link>
    </div>
    <div class="py-5 px-5">
      <router-link to="/blog" v-slot="{ isActive, isExactActive, href }">
        <a :href="href" @click="goToBlog">
          <template v-if="isActive || isExactActive">
            <p class="cursor-pointer font-bold text-3xl">
              blog
            </p>
          </template>
          <template v-else>
            <p class="cursor-pointer text-3xl">blog</p>
          </template>
        </a>
      </router-link>
    </div>
    <div class="py-5 px-5">
      <router-link to="/contact" v-slot="{ isActive, isExactActive, href }">
        <a :href="href" @click="goToContact">
          <template v-if="isActive || isExactActive">
            <p class="cursor-pointer font-bold text-3xl">
              contact
            </p>
          </template>
          <template v-else>
            <p class="cursor-pointer text-3xl">contact</p>
          </template>
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
import Close from "@/components/icons/Close";

export default {
  name: "MenuSheetMobile",
  components: {
    Close
  },
  methods: {
    goToHome() {
      this.$router.push("/");
      this.$emit("setMenuSheetMobile", "toHide");
    },
    goToAbout() {
      this.$router.push("/about");
      this.$emit("setMenuSheetMobile", "toHide");
    },
    goToPortfolio() {
      this.$router.push("/portfolio");
      this.$emit("setMenuSheetMobile", "toHide");
    },
    goToBlog() {
      this.$router.push("/blog");
      this.$emit("setMenuSheetMobile", "toHide");
    },
    goToContact() {
      this.$router.push("/contact");
      this.$emit("setMenuSheetMobile", "toHide");
    },
    goBack() {
      this.$emit("setMenuSheetMobile", "toHide");
    }
  }
};
</script>
