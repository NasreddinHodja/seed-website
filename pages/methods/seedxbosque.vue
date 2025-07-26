<script setup lang="ts">
import seedxbosque from "@/content/methods/seedxbosque";

const content = seedxbosque.en;
const credits = [content.credits.artists, content.credits.seed];
</script>

<template>
  <LayoutsScrollablePost>
    <SharedPostHeader :title="content.title" :relatedLinks="content.links" />

    <SharedFlyerImage :src="content.flyer" class="md:max-w-2/3 mx-auto" />

    <SharedPostDescription :paragraphs="content.description" />

    <div v-for="credit in credits" class="flex flex-col gap-10">
      <h2>{{ credit.title }}</h2>
      <SharedCreditsList :credits="credit.members" />
    </div>

    <SharedPictureGallery :pictures="content.gallery" class="w-full" />
  </LayoutsScrollablePost>
</template>
