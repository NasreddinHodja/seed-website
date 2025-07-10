<script setup lang="ts">
import c2p from "@/content/tools/c2p";

const content = c2p.en;
</script>

<template>
  <div
    class="w-full h-full flex flex-col items-start justify-start px-6 md:px-16 gap-10 md:gap-5 pt-4 pb-14 md:pt-16 overflow-auto"
  >
    <a
      :href="content.credits[0].link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h1>{{ content.title }} - {{ content.credits[0].label }}</h1>
    </a>

    <iframe
      src="https://cryptotext.code2pixels.xyz/"
      class="border-none w-full h-full"
    ></iframe>
  </div>
</template>
