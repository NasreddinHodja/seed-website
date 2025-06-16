<script setup lang="ts">
import zorav2Gallery from "@/content/web3/zorav2-gallery";

const content = zorav2Gallery.en;
</script>

<template>
  <div
    class="w-full h-auto flex flex-col items-start justify-center px-6 md:px-16 gap-10 md:gap-28 pt-4 pb-14 md:pt-16 overflow-scroll"
  >
    <h1>{{ content.title }}</h1>
    <iframe
      :src="content.video"
      class="w-full h-[350px] md:w-1/2 md:h-[400px] m-auto"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <SharedPictureGallery :pictures="content.pictures" />
  </div>
</template>
