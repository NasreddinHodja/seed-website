<script setup lang="ts">
import seedxbosque_patagonia from "@/content/methods/seedxbosque_patagonia";

const content = seedxbosque_patagonia.en;
</script>

<template>
  <LayoutsScrollablePost>
    <SharedPostHeader :title="content.title" :relatedLinks="[content.link]" />

    <img :src="content.people" class="mx-auto" />

    <SharedPostDescription :paragraphs="content.description" />

    <div class="flex flex-col gap-8 md:gap-16">
      <h2>{{ content.participants.title }}</h2>
      <SharedCreditsList :credits="content.participants.credits" />
    </div>

    <img :src="content.peopleB" class="mx-auto" />
    <img :src="content.peopleC" class="mx-auto" />
  </LayoutsScrollablePost>
</template>
