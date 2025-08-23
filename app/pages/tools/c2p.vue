<script setup lang="ts">
import c2p from "~~/content/tools/c2p";

const content = c2p.en;
</script>

<template>
  <div
    class="w-full h-full flex flex-col items-start justify-start px-6 md:px-16 gap-10 md:gap-5 pt-4 pb-14 md:pt-16 overflow-auto"
  >
    <SharedLink v-if="content.credits[0]" :url="content.credits[0].link">
      <h1>{{ content.title }} - {{ content.credits[0].label }}</h1>
    </SharedLink>

    <iframe
      src="https://cryptotext.code2pixels.xyz/"
      class="border-none w-full h-full"
    ></iframe>
  </div>
</template>
