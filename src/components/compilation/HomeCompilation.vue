<template>
  <div>
    <HomeDesktop class="hidden lg:block" />
    <HomeTablet class="hidden md:block lg:hidden" />
    <HomeMobile class="md:hidden" />
  </div>
</template>

<script>
import HomeDesktop from "@/components/desktop/view/HomeDesktop";
import HomeMobile from "@/components/mobile/view/HomeMobile";
import HomeTablet from "@/components/tablet/view/HomeTablet";

export default {
  name: "HomeCompilation",
  components: {
    HomeDesktop,
    HomeTablet,
    HomeMobile
  }
};
</script>
