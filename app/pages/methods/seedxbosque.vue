<script setup lang="ts">
import seedxbosque from "~~/content/methods/seedxbosque";

const content = seedxbosque.en;
const credits = [content.credits.artists, content.credits.seed];
</script>

<template>
  <LayoutsScrollablePost>
    <SharedPostHeader :title="content.title" :related-links="content.links" />

    <SharedFlyerImage :src="content.flyer" class="md:max-w-2/3 mx-auto" />

    <SharedPostDescription :paragraphs="content.description" />

    <SharedCreditsSection
      :credits="credits.map((c) => ({ title: c.title, names: c.members }))"
    />

    <SharedPictureGallery :pictures="content.gallery" class="w-full" />
  </LayoutsScrollablePost>
</template>
