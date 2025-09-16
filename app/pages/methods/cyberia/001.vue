<script setup lang="ts">
import index from "~~/content/methods/cyberia/001";

const content = index.en;
</script>

<template>
  <LayoutsScrollablePost>
    <SharedPostHeader :title="content.title" />

    <SharedFlyerImage :src="content.flyer" class="mx-auto md:w-2/3" />

    <SharedShowLineUp :artists="content.lineup" />

    <SharedPictureGallery
      :pictures="
        content.gallery.map((url) => ({
          url: url,
          link: url,
        }))
      "
      class="w-full"
    />
  </LayoutsScrollablePost>
</template>
