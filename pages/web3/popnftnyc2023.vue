<script setup lang="ts">
import popnftnyc2023 from "@/content/web3/popnftnyc2023";

const content = popnftnyc2023.en;
const videoId = extractYTVideoID(content.video);
</script>

<template>
  <LayoutsScrollablePost>
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
  </LayoutsScrollablePost>
</template>
