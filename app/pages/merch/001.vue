<script setup lang="ts">
import index from "~~/content/merch/001";

const content = index.en;
const videoId = extractYTVideoID(content.video);
</script>

<template>
  <LayoutsScrollablePost>
    <SharedPostHeader :title="content.title" />

    <div v-if="videoId" class="m-auto flex flex-wrap items-end gap-4">
      <SharedYTLazyEmbed :video-id="videoId" class="w-full md:w-96" />
      <SharedLink class="bg-white text-black font-xl" :url="content.link.url">
        {{ content.link.label }}
      </SharedLink>
    </div>

    <img id="shirts" class="m-auto" :src="content.gif" />

    <div class="flex flex-wrap gap-1 justify-center">
      <img :src="content.images[0]" class="w-full md:w-1/3" />
      <img :src="content.images[1]" class="w-full md:w-1/3" />
    </div>
  </LayoutsScrollablePost>
</template>
