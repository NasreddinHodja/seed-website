<script setup lang="ts">
import seedxnewtro from "~~/content/methods/seedxnewtro";

const content = seedxnewtro.en;
const aftermovieVideoId = extractYTVideoID(content.aftermovie);
const setVideos = content.sets.videos.map((video) => extractYTVideoID(video));
</script>

<template>
  <LayoutsScrollablePost>
    <SharedPostHeader :title="content.title" />

    <SharedFlyerImage :src="content.flyer" class="md:w-2/3 mx-auto" />

    <SharedYTLazyEmbed
      v-if="aftermovieVideoId"
      :video-id="aftermovieVideoId"
      class="w-full md:w-[700px] mx-auto"
    />

    <div class="flex flex-col w-full md:w-auto gap-2 mx-auto">
      <p v-for="line in content.manifesto" :key="line">{{ line }}</p>
    </div>

    <SharedPostDescription :paragraphs="content.description" />

    <h2>{{ content.sets.title }}</h2>
    <div
      v-for="(video, index) in setVideos"
      :key="index"
      class="flex flex-col gap-10 md:gap-2 w-full"
    >
      <SharedYTLazyEmbed
        v-if="video"
        :video-id="video"
        class="w-full md:w-[700px] mx-auto"
      />
    </div>

    <img :src="content.people" class="mx-auto" />
  </LayoutsScrollablePost>
</template>
