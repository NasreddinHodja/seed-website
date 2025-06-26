<script setup lang="ts">
import index from "~/content/merch/002";

const content = index.en;
// const videoId = extractYTVideoID(content.video);
</script>

<template>
  <div
    class="flex flex-col w-screen h-auto gap-10 md:gap-16 px-6 md:px-16 pt-4 md:pt-16 pb-14 items-start md:items-start"
  >
    <h1>{{ content.title }}</h1>
    <a class="bg-white" :href="content.link.url" target="_blank" rel="noopene">
      <h2 class="text-black px-2">{{ content.link.label }}</h2>
    </a>
    <!-- <div v-if="videoId" class="m-auto flex flex-wrap items-end gap-4">
      <SharedYTLazyEmbed :video-id="videoId" class="w-full md:w-96" />
    </div> -->
    <img class="m-auto w-full md:w-1/2" :src="content.flyer" />

    <div class="flex flex-row flex-wrap pt-10">
      <img
        v-for="shirt in content.shirts"
        class="m-auto w-full md:w-96 pb-10"
        :src="shirt"
      />
    </div>

    <div class="flex flex-col pt-10">
      <img
        v-for="picture in content.pictures"
        class="m-auto w-full md:w-1/2 pb-10"
        :src="picture"
      />
    </div>

    <div class="flex flex-col gap-2">
      <div
        v-for="credit in content.credits"
        class="flex flex-row gap-4 items-center"
      >
        {{ credit.label }}

        <div
          v-for="artist in credit.artists"
          class="flex flex-row font-bold text-lg items-center"
        >
          {{ artist }}
        </div>
      </div>
    </div>
    <!-- <div class="flex flex-wrap gap-1 justify-center">
      <img :src="content.images[0]" class="w-full md:w-1/3" />
      <img :src="content.images[1]" class="w-full md:w-1/3" />
    </div> -->
  </div>
</template>
