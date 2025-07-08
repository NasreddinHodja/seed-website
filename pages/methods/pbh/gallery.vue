<script setup lang="ts">
import index from "@/content/methods/pbh/gallery";

const content = index.en;
</script>

<template>
  <div
    class="w-full flex flex-col items-start justify-center px-6 md:px-16 gap-10 md:gap-14 pt-4 pb-14 md:pt-14 overflow-auto"
  >
    <h1>{{ content.title }}</h1>

    <SharedPictureGallery :pictures="content.pictures" class="w-full" />
  </div>
</template>
