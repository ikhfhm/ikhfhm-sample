<template>
  <div class="h-screen font-ubuntu w-full bg-primary">
    <HeaderTablet class="fixed z-10" />
    <div class="fixed bottom-0 flex justify-center w-full">
      <img src="../../../assets/ikhwan-desktop.png" class="h-screen pt-28" />
    </div>
    <div class="fixed bottom-0 right-0 text-white pb-6 pr-10">
      Created by <span class="font-bold">Ikhwan Fahmi</span>
    </div>
  </div>
</template>

<script>
import HeaderTablet from "@/components/tablet/HeaderTablet";

export default {
  name: "HomeTablet",
  components: {
    HeaderTablet
  }
};
</script>
