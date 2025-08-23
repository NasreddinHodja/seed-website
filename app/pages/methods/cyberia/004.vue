<script setup lang="ts">
import index from "~~/content/methods/cyberia/004";

const content = index.en;
</script>

<template>
  <LayoutsScrollablePost>
    <SharedPostHeader :title="content.title" />

    <video
      autoplay
      muted
      loop
      playsinline
      class="w-full md:w-2/3 h-full object-cover mx-auto"
    >
      <source :src="content.video" type="video/mp4" />
    </video>

    <SharedPictureGallery :pictures="content.gallery" class="w-full" />
  </LayoutsScrollablePost>
</template>
