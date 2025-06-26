<script setup lang="ts">
import index from "~/content/merch/001";

const content = index.en;
const videoId = extractYTVideoID(content.video);
</script>

<template>
  <div
    class="flex flex-col w-screen gap-24 px-6 md:px-16 py-14 md:py-16 items-start md:items-start"
  >
    <h1>{{ content.title }}</h1>
    <div v-if="videoId" class="m-auto flex flex-wrap items-end gap-4">
      <SharedYTLazyEmbed :video-id="videoId" class="w-full md:w-96" />
      <a class="bg-white text-black font-xl" :href="content.link.url">{{
        content.link.label
      }}</a>
    </div>
    <img class="m-auto" id="shirts" :src="content.gif" />
    <div class="flex flex-wrap gap-1 justify-center">
      <img :src="content.images[0]" class="w-full md:w-1/3" />
      <img :src="content.images[1]" class="w-full md:w-1/3" />
    </div>
  </div>
</template>
