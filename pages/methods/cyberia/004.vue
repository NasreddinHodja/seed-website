<script setup lang="ts">
import index from "~/content/methods/cyberia/004";

const content = index.en;
</script>

<template>
  <LayoutsScrollablePost>
    <SharedPostHeader :title="content.title" />

    <!-- <div class="flex flex-wrap gap-4 md:pb-10">
      <SharedLink
        v-for="artist in content.lineup"
        :href="artist.link"
        class="text-xl font-bold bg-white text-black px-2"
      >
        {{ artist.name }}
      </SharedLink>
    </div> -->

    <!-- <img :src="content.flyer" class="md:w-1/2 h-auto mx-auto md:pb-14" /> -->

    <video
      autoplay
      muted
      loop
      playsinline
      class="w-full md:w-2/3 h-full object-cover mx-auto"
    >
      <source :src="content.video" type="video/mp4" />
    </video>

    <SharedPictureGallery :pictures="content.gallery" class="w-full" />
  </LayoutsScrollablePost>
</template>
