<template>
  <div
    class="w-full bg-primary font-ubuntu text-base text-white py-5 px-10 fixed z-10"
  >
    <div class="flex justify-between items-center">
      <router-link to="/">
        <img src="../../assets/logo.png" class="cursor-pointer h-10" />
      </router-link>
      <div class="flex">
        <div class="pr-2">
          <router-link
            to="/"
            v-slot="{ navigate, isActive, isExactActive, href }"
          >
            <a :href="href" @click="navigate">
              <template v-if="isActive || isExactActive">
                <p class="cursor-pointer font-bold transition">
                  home
                </p>
              </template>
              <template v-else>
                <p class="cursor-pointer transition">home</p>
              </template>
            </a>
          </router-link>
        </div>
        <div class="px-2">
          <router-link
            to="/about"
            v-slot="{ navigate, isActive, isExactActive, href }"
          >
            <a :href="href" @click="navigate">
              <template v-if="isActive || isExactActive">
                <p class="cursor-pointer font-bold transition">
                  about
                </p>
              </template>
              <template v-else>
                <p class="cursor-pointer transition">
                  about
                </p>
              </template>
            </a>
          </router-link>
        </div>
        <div class="px-2">
          <router-link
            to="/portfolio"
            v-slot="{ navigate, isActive, isExactActive, href }"
          >
            <a :href="href" @click="navigate">
              <template v-if="isActive || isExactActive">
                <p class="cursor-pointer font-bold transition">
                  portfolio
                </p>
              </template>
              <template v-else>
                <p class="cursor-pointer transition">
                  portfolio
                </p>
              </template>
            </a>
          </router-link>
        </div>
        <div class="px-2">
          <router-link
            to="/blog"
            v-slot="{ navigate, isActive, isExactActive, href }"
          >
            <a :href="href" @click="navigate">
              <template v-if="isActive || isExactActive">
                <p class="cursor-pointer font-bold transition">
                  blog
                </p>
              </template>
              <template v-else>
                <p class="cursor-pointer transition">
                  blog
                </p>
              </template>
            </a>
          </router-link>
        </div>
        <div class="pl-2">
          <router-link
            to="/contact"
            v-slot="{ navigate, isActive, isExactActive, href }"
          >
            <a :href="href" @click="navigate">
              <template v-if="isActive || isExactActive">
                <p class="cursor-pointer font-bold transition">
                  contact
                </p>
              </template>
              <template v-else>
                <p class="cursor-pointer transition">
                  contact
                </p>
              </template>
            </a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderTablet"
};
</script>
<style scoped>
.transition {
  color: white;
  transition: 0.3s;
}
.transition:hover {
  color: transparent;
}
</style>
