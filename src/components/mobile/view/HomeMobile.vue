<template>
  <div class="h-screen font-ubuntu w-full bg-primary">
    <MenuSheetMobile
      v-if="showMenuSheetMobile"
      v-on:setMenuSheetMobile="setMenuSheetMobile"
    />
    <div>
      <HeaderMobile
        class="fixed z-10"
        v-on:setMenuSheetMobile="setMenuSheetMobile"
      />
      <div v-if="isLoading">
        <LoadingMobile />
      </div>
      <div v-else>
        <div class="fixed bottom-0 flex justify-center w-full">
          <img src="../../../assets/ikhwan-mobile.png" class="h-auto pr-5" />
        </div>
        <div class="fixed bottom-0 right-0 text-sm text-white pb-4 pr-5">
          Created by <span class="font-bold">Ikhwan Fahmi</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMobile from "@/components/mobile/HeaderMobile";
import MenuSheetMobile from "@/components/mobile/MenuSheetMobile";
import LoadingMobile from "@/components/loading/LoadingMobile";

export default {
  name: "HomeMobile",
  components: {
    HeaderMobile,
    MenuSheetMobile,
    LoadingMobile
  },
  data() {
    return {
      showMenuSheetMobile: false,
      isLoading: true
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
    setTimeout(() => {
      this.isLoading = false;
    }, 2400);
  }
};
</script>
