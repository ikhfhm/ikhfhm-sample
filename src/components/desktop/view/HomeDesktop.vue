<template>
  <div class="h-screen font-ubuntu w-full bg-primary">
    <HeaderDesktop />
    <div v-if="isLoading">
      <LoadingDesktop />
    </div>
    <div v-else>
      <div class="fixed bottom-0 flex justify-center w-full">
        <img src="../../../assets/ikhwan-desktop.png" class="h-screen pt-28" />
      </div>
      <div class="fixed bottom-0 right-0 text-white pb-6 pr-10">
        Created by <span class="font-bold">Ikhwan Fahmi</span>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderDesktop from "@/components/desktop/HeaderDesktop";
import LoadingDesktop from "@/components/loading/LoadingDesktop";

export default {
  name: "HomeDesktop",
  components: {
    HeaderDesktop,
    LoadingDesktop
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
