<template>
  <div class="w-full bg-primary font-ubuntu text-base text-white py-5 px-5">
    <div class="flex justify-between items-center">
      <router-link to="/">
        <img src="../../assets/logo.png" class="cursor-pointer h-6" />
      </router-link>
      <div
        class="cursor-pointer"
        @click="() => $emit('setMenuSheetMobile', 'toShow')"
      >
        <StripMenuHeader />
      </div>
    </div>
  </div>
</template>

<script>
import StripMenuHeader from "@/components/icons/StripMenuHeader";

export default {
  name: "HeaderMobile",
  components: {
    StripMenuHeader
  }
};
</script>
