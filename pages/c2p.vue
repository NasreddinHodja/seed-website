<script setup lang="ts">
import seedxbosque_patagonia from "@/content/methods/seedxbosque_patagonia";

const content = seedxbosque_patagonia.en;
</script>

<template>
  <div
    class="w-full h-full flex flex-col items-start justify-start px-6 md:px-16 gap-10 md:gap-5 pt-4 pb-14 md:pt-10 overflow-auto"
  >
    <h1 class="hidden md:block">C2P</h1>

    <iframe
      src="https://cryptotext.code2pixels.xyz/"
      class="border-none w-full h-full"
    ></iframe>
  </div>
</template>
