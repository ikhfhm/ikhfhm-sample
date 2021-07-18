<template>
  <div class="h-screen font-ubuntu w-full bg-primary">
    <MenuSheetMobile
      v-if="showMenuSheetMobile"
      v-on:setMenuSheetMobile="setMenuSheetMobile"
    />
    <HeaderMobile
      class="fixed z-10"
      v-on:setMenuSheetMobile="setMenuSheetMobile"
    />
    <div class="absolute bottom-0 flex justify-center w-full">
      <img src="../../../assets/ikhwan-mobile.png" class="h-auto pr-5" />
    </div>
  </div>
</template>

<script>
import HeaderMobile from "@/components/mobile/HeaderMobile";
import MenuSheetMobile from "@/components/mobile/MenuSheetMobile";

export default {
  name: "HomeMobile",
  components: {
    HeaderMobile,
    MenuSheetMobile
  },
  data() {
    return {
      showMenuSheetMobile: false
    };
  },
  methods: {
    setMenuSheetMobile(to) {
      if (to === "toHide") {
        return (this.showMenuSheetMobile = false);
      } else if (to === "toShow") {
        this.showMenuSheetMobile = true;
      }
    }
  },
  mounted() {
    this.showMenuSheetMobile = false;
  }
};
</script>
