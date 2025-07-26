<script setup lang="ts">
import index from "~/content/methods/cyberia/005";

const content = index.en;
</script>

<template>
  <LayoutsScrollablePost>
    <SharedPostHeader :title="content.title" />

    <div class="flex flex-col md:flex-row gap-2">
      <SharedFlyerImage :src="content.flyerFront" />
      <SharedFlyerImage :src="content.flyerBack" />
    </div>

    <SharedShowLineUp :artists="content.lineup" />

    <img :src="content.gif" class="h-auto mx-auto p-4 md:mb-14 bg-white" />

    <SharedPictureGallery :pictures="content.gallery" class="w-full mx-auto" />
  </LayoutsScrollablePost>
</template>
