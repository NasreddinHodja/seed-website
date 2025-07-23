<script setup lang="ts">
import index from "~/content/methods/cyberia/005";

const content = index.en;
</script>

<template>
  <LayoutsScrollablePost>
    <SharedScrollablePostHeader :title="content.title" />

    <div class="flex flex-col md:flex-row justify-center gap-2">
      <SharedFlyerImage :src="content.flyerFront" class="max-w-1/3" />
      <SharedFlyerImage :src="content.flyerBack" />
    </div>

    <SharedShowLineUp :artists="content.lineup" />

    <img :src="content.gif" class="h-auto mx-auto p-4 md:mb-14 bg-white" />

    <SharedPictureGallery :pictures="content.gallery" class="w-full mx-auto" />
  </LayoutsScrollablePost>
</template>
