<script setup lang="ts">
import seedxbosque from "@/content/methods/seedxbosque";

const content = seedxbosque.en;
const credits = [content.credits.artists, content.credits.seed];
</script>

<template>
  <div
    class="w-full h-auto flex flex-col items-start justify-start px-6 md:px-16 gap-10 md:gap-28 pt-4 pb-14 md:pt-10 overflow-auto"
  >
    <h1>{{ content.title }}</h1>

    <img :src="content.flyer" class="md:max-w-[500px] mx-auto" />

    <div v-for="credit in credits" class="flex flex-col gap-10">
      <h2>{{ credit.title }}</h2>
      <SharedCreditsList :credits="credit.members" />
    </div>

    <SharedPictureGallery :pictures="content.gallery" class="w-full" />
  </div>
</template>
