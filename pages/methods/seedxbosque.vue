<script setup lang="ts">
import seedxbosque from "@/content/methods/seedxbosque";

const content = seedxbosque.en;
const credits = [content.credits.artists, content.credits.seed];
</script>

<template>
  <div
    class="w-full h-auto flex flex-col items-start justify-start px-6 md:px-16 gap-10 md:gap-16 md:pt-16 overflow-auto"
  >
    <h1>{{ content.title }}</h1>

    <div class="flex flex-col gap-4">
      <a
        v-for="link in content.links"
        :href="link.url"
        class="px-2 text-lg bg-white text-black font-bold"
      >
        {{ link.label }}
      </a>
    </div>

    <div class="flex flex-col items-end mx-auto gap-4">
      <img :src="content.flyer" class="md:max-w-[500px]" />
    </div>

    <div class="flex flex-col gap-6">
      <div v-for="paragraph in content.description">
        <p v-html="paragraph"></p>
      </div>
    </div>

    <div v-for="credit in credits" class="flex flex-col gap-10">
      <h2>{{ credit.title }}</h2>
      <SharedCreditsList :credits="credit.members" />
    </div>

    <SharedPictureGallery :pictures="content.gallery" class="w-full" />
  </div>
</template>
