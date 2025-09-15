<script setup lang="ts">
import index from "~~/content/merch/002";

const content = index.en;
// TODO: move video yt account
// const videoId = extractYTVideoID(content.video);
</script>

<template>
  <div
    class="flex flex-col w-screen h-auto gap-10 md:gap-16 px-6 md:px-16 pt-4 md:pt-16 pb-14 items-start md:items-start"
  >
    <SharedPostHeader :title="content.title" :related-links="[content.link]" />

    <!-- TODO: move vide yt account -->
    <!-- <div v-if="videoId" class="m-auto flex flex-wrap items-end gap-4">
      <SharedYTLazyEmbed :video-id="videoId" class="w-full md:w-96" />
    </div> -->

    <SharedFlyerImage class="m-auto w-full md:w-1/2" :src="content.flyer" />

    <div class="flex flex-row flex-wrap pt-10">
      <NuxtImg
        v-for="shirt in content.shirts"
        :key="shirt"
        class="m-auto w-full md:w-96 pb-10"
        :src="shirt"
      />
    </div>

    <div class="flex flex-col pt-10 mx-auto">
      <SharedFlyerImage
        v-for="picture in content.pictures"
        :key="picture"
        class="m-auto w-full md:w-2/3 pb-10 mx-auto"
        :src="picture"
      />
    </div>

    <div class="flex flex-col gap-2">
      <div
        v-for="credit in content.credits"
        :key="credit.label"
        class="flex flex-row gap-4 items-center"
      >
        {{ credit.label }}

        <div
          v-for="artist in credit.artists"
          :key="artist"
          class="flex flex-row font-bold text-lg items-center"
        >
          {{ artist }}
        </div>
      </div>
    </div>
  </div>
</template>
