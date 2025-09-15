<script setup lang="ts">
import seedxbosque_patagonia from "~~/content/methods/seedxbosque_patagonia";

const content = seedxbosque_patagonia.en;
</script>

<template>
  <LayoutsScrollablePost>
    <SharedPostHeader :title="content.title" :related-links="[content.link]" />

    <NuxtImg :src="content.people" class="mx-auto" />

    <SharedPostDescription :paragraphs="content.description" />

    <SharedCreditsSection
      :credits="[
        {
          title: content.participants.title,
          names: content.participants.credits,
        },
      ]"
    />

    <NuxtImg :src="content.peopleB" class="mx-auto" />
    <NuxtImg :src="content.peopleC" class="mx-auto" />
  </LayoutsScrollablePost>
</template>
