<script setup lang="ts">
import index from "~/content/methods/cyberia/002";

const content = index.en;
const videoId = extractYTVideoID(content.video);
</script>

<template>
  <LayoutsScrollablePost>
    <h1>{{ content.title }}</h1>

    <SharedFlyerImage :src="content.flyer" class="mx-auto md:w-2/3" />

    <SharedShowLineUp :artists="content.lineup" />

    <SharedYTLazyEmbed
      v-if="videoId"
      :video-id="videoId"
      class="w-full md:w-[700px] mx-auto"
    />
  </LayoutsScrollablePost>
</template>
