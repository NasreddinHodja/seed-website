<script setup lang="ts">
import index from "~/content/methods/cyberia/002";

const content = index.en;
const videoId = extractYTVideoID(content.video);
</script>

<template>
  <SharedScrollablePost>
    <h1>{{ content.title }}</h1>

    <div class="flex flex-wrap gap-4 md:pb-10">
      <a
        v-for="artist in content.lineup"
        :href="artist.link"
        target="_blank"
        rel="noopener noreferrer"
        class="text-xl font-bold bg-white text-black px-2"
      >
        {{ artist.name }}
      </a>
    </div>

    <img :src="content.flyer" class="md:w-1/2 mx-auto md:pb-14" />

    <SharedYTLazyEmbed
      v-if="videoId"
      :video-id="videoId"
      class="w-full md:w-[700px] mx-auto"
    />
  </SharedScrollablePost>
</template>
