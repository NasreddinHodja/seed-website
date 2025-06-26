<script setup lang="ts">
import seedxbosque_patagonia from "@/content/methods/seedxbosque_patagonia";

const content = seedxbosque_patagonia.en;
</script>

<template>
  <div
    class="w-full h-auto flex flex-col items-start justify-start px-6 md:px-16 gap-10 md:gap-24 pt-4 pb-14 md:pt-10 overflow-auto"
  >
    <h1>{{ content.title }}</h1>

    <img :src="content.banner" class="w-full md:max-w-[1000px] mx-auto" />

    <a
      :href="content.link.url"
      class="bg-white text-black text-xl font-bold px-2 w-fit"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ "> " + content.link.label }}
    </a>

    <div class="flex flex-col w-full gap-10">
      <p v-for="paragraph in content.description">{{ paragraph }}</p>
    </div>

    <img :src="content.people" class="mx-auto" />

    <h2>{{ content.participants.title }}</h2>
    <SharedCreditsList :credits="content.participants.credits" />

    <img :src="content.peopleB" class="mx-auto" />
    <img :src="content.peopleC" class="mx-auto" />
  </div>
</template>
