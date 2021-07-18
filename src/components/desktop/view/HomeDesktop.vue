<template>
  <div class="h-screen font-ubuntu w-full bg-primary">
    <HeaderDesktop class="fixed z-10" />
    <div class="absolute bottom-0 flex justify-center w-full">
      <img src="../../../assets/ikhwan-desktop.png" class="h-screen pt-28" />
    </div>
  </div>
</template>

<script>
import HeaderDesktop from "@/components/desktop/HeaderDesktop";

export default {
  name: "HomeDesktop",
  components: {
    HeaderDesktop
  }
};
</script>
