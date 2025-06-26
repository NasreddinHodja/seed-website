<script setup lang="ts">
import popnftnyc2023 from "@/content/web3/popnftnyc2023";

const content = popnftnyc2023.en;
const videoId = extractYTVideoID(content.video);
</script>

<template>
  <div
    class="w-full h-auto flex flex-col items-start justify-center px-6 md:px-16 gap-10 md:gap-16 pt-4 pb-14 md:pt-16 overflow-auto"
  >
    <h1>{{ content.title }}</h1>

    <SharedYTLazyEmbed
      v-if="videoId"
      :video-id="videoId"
      class="w-full md:w-[700px] mx-auto"
    />

    <div class="flex flex-col gap-6 items-start">
      <a
        v-for="piece in content.pieces"
        :href="piece.link"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-start justify-center bg-white text-black px-2"
      >
        <span>_</span><span>{{ piece.label }}</span>
      </a>
    </div>
  </div>
</template>
