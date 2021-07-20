<template>
  <div class="h-screen font-ubuntu w-full bg-primary">
    <HeaderTablet class="fixed z-10" />
    <div v-if="isLoading">
      <LoadingTablet />
    </div>
    <div v-else>
      <div class="fixed bottom-0 flex justify-center w-full">
        <img src="../../../assets/ikhwan-tablet.png" class="h-screen pt-28" />
      </div>
      <div class="fixed bottom-0 right-0 text-white pb-6 pr-10">
        Created by <span class="font-bold">Ikhwan Fahmi</span>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTablet from "@/components/tablet/HeaderTablet";
import LoadingTablet from "@/components/loading/LoadingTablet";

export default {
  name: "HomeTablet",
  components: {
    HeaderTablet,
    LoadingTablet
  },
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2400);
  }
};
</script>
