<script setup lang="ts">
import index from "~~/content/methods/cyberia/006";

const content = index.en;
</script>

<template>
  <LayoutsScrollablePost>
    <SharedPostHeader :title="content.title" />

    <div class="flex flex-col md:flex-row gap-2 w-full justify-center">
      <SharedFlyerImage :src="content.flyer" />
    </div>

    <SharedShowLineUp :artists="content.lineup" />

    <SharedPostDescription :paragraphs="content.description" />

    <SharedPictureGallery :pictures="content.gallery" class="w-full mx-auto" />
  </LayoutsScrollablePost>
</template>
