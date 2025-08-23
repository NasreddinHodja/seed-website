<script setup lang="ts">
import popnftnyc2023 from "~~/content/web3/popnftnyc2023";

const content = popnftnyc2023.en;
const videoId = extractYTVideoID(content.video);
</script>

<template>
  <LayoutsScrollablePost>
    <SharedPostHeader :title="content.title" />

    <SharedYTLazyEmbed
      v-if="videoId"
      :video-id="videoId"
      class="w-full md:w-[700px] mx-auto"
    />

    <div class="flex flex-col gap-6 items-start">
      <SharedLink
        v-for="piece in content.pieces"
        :key="piece.label"
        :url="piece.link"
        class="flex items-start justify-center bg-white text-black px-2"
      >
        <span>_</span><span>{{ piece.label }}</span>
      </SharedLink>
    </div>
  </LayoutsScrollablePost>
</template>
