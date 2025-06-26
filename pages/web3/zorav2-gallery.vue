<script setup lang="ts">
import zorav2Gallery from "@/content/web3/zorav2-gallery";

const content = zorav2Gallery.en;
const videoId = extractYTVideoID(content.video);
</script>

<template>
  <div
    class="w-full h-auto flex flex-col items-start justify-center px-6 md:px-16 gap-10 md:gap-28 pt-4 pb-14 md:pt-16 overflow-auto"
  >
    <h1>{{ content.title }}</h1>

    <SharedYTLazyEmbed
      v-if="videoId"
      :video-id="videoId"
      class="w-full md:w-[700px] mx-auto"
    />

    <SharedPictureGallery
      :pictures="content.pictures"
      class="w-full md:w-2/3 mx-auto"
    />
  </div>
</template>
