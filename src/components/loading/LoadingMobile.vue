<template>
  <div class="fixed inset-0 flex justify-center items-center">
    <div class="loader" id="loader">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<style scoped>
#loader span {
  display: inline-block;
  width: 8px;
  height: 10px;
  border-radius: 100%;
  background-color: #ffffff;
  margin: 35px 5px;
}

#loader span:nth-child(1) {
  animation: bounce 1s ease-in-out infinite;
}

#loader span:nth-child(2) {
  animation: bounce 1s ease-in-out 0.33s infinite;
}

#loader span:nth-child(3) {
  animation: bounce 1s ease-in-out 0.66s infinite;
}

@keyframes bounce {
  0%,
  75%,
  100% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }

  25% {
    -webkit-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -o-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
</style>
