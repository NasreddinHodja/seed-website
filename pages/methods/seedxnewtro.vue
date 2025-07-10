<script setup lang="ts">
import seedxnewtro from "@/content/methods/seedxnewtro";

const content = seedxnewtro.en;
const aftermovieVideoId = extractYTVideoID(content.aftermovie);
const setVideos = content.sets.videos.map((video) => extractYTVideoID(video));
</script>

<template>
  <div
    class="w-full h-auto flex flex-col items-start justify-start px-6 md:px-16 gap-10 md:gap-28 pt-4 pb-14 md:pt-16 overflow-auto"
  >
    <h1>{{ content.title }}</h1>

    <img :src="content.flyer" class="md:max-w-[600px] mx-auto" />

    <SharedYTLazyEmbed
      v-if="aftermovieVideoId"
      :video-id="aftermovieVideoId"
      class="w-full md:w-[700px] mx-auto"
    />

    <div class="flex flex-col w-full md:w-auto gap-2 mx-auto">
      <p v-for="line in content.manifesto">{{ line }}</p>
    </div>

    <div class="flex flex-col w-full gap-10">
      <p v-for="paragraph in content.description">{{ paragraph }}</p>
    </div>

    <h2>{{ content.sets.title }}</h2>
    <div
      v-for="video in setVideos"
      class="flex flex-col gap-10 md:gap-2 w-full"
    >
      <SharedYTLazyEmbed
        v-if="video"
        :video-id="video"
        class="w-full md:w-[700px] mx-auto"
      />
    </div>

    <img :src="content.people" class="mx-auto" />
  </div>
</template>
