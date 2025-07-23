<script setup lang="ts">
import index from "~/content/methods/cyberia/005";

const content = index.en;
</script>

<template>
  <LayoutsScrollablePost>
    <h1>{{ content.title }}</h1>

    <div class="flex flex-wrap gap-4 md:pb-6">
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

    <img
      :src="content.flyerFront"
      class="h-auto w-full md:w-1/2 mx-auto md:mb-14"
    />
    <img
      :src="content.flyerBack"
      class="h-auto w-full md:w-1/2 mx-auto md:mb-14"
    />

    <img :src="content.gif" class="h-auto mx-auto p-4 md:mb-14 bg-white" />

    <SharedPictureGallery :pictures="content.gallery" class="w-full mx-auto" />
  </LayoutsScrollablePost>
</template>
