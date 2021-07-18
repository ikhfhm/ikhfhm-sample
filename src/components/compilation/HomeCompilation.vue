<template>
  <div>
    <HomeDesktop class="hidden lg:block" />
    <HomeMobile class="lg:hidden" />
  </div>
</template>

<script>
import HomeDesktop from "@/components/desktop/view/HomeDesktop";
import HomeMobile from "@/components/mobile/view/HomeMobile";

export default {
  name: "HomeCompilation",
  components: {
    HomeDesktop,
    HomeMobile
  }
};
</script>
