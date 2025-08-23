<script setup lang="ts">
import index from "~~/content/methods/cyberia/003";

const content = index.en;
const videoId = extractYTVideoID(content.video);
</script>

<template>
  <LayoutsScrollablePost>
    <SharedPostHeader :title="content.title" />

    <SharedFlyerImage :src="content.flyer" class="mx-auto md:w-2/3" />

    <SharedShowLineUp :artists="content.lineup" />

    <SharedYTLazyEmbed
      v-if="videoId"
      :video-id="videoId"
      class="w-full md:w-[700px] mx-auto"
    />

    <SharedPictureGallery
      :pictures="
        content.gallery.map((url) => ({
          originUrl: url,
          thumbUrl: url,
          link: url,
        }))
      "
      class="w-full"
    />
  </LayoutsScrollablePost>
</template>
