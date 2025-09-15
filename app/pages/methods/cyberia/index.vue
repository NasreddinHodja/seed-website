<script setup lang="ts">
import index from "~~/content/methods/cyberia/index";

const content = index.en;
</script>

<template>
  <LayoutsScrollablePost>
    <div class="flex flex-col gap-10">
      <SharedPostHeader :title="content.title" />

      <div class="flex flex-col lg:flex-row w-full gap-10 lg:gap-24">
        <div class="flex-1 flex flex-col gap-10">
          <SharedPostDescription :paragraphs="content.descripton" tight />

          <div class="flex flex-row flex-wrap gap-4">
            <div
              v-for="event in content.events"
              :key="event.label"
              class="text-xl font-bold text-black bg-white px-2"
            >
              <SharedLink v-if="!event.link.startsWith('/')" :url="event.link">
                {{ event.label }}
              </SharedLink>
              <NuxtLink v-else :to="event.link">{{ event.label }}</NuxtLink>
            </div>
          </div>
        </div>

        <div
          class="flex-1 h-fit flex flex-col items-start gap-2 border-4 border-white"
        >
          <NuxtImg :src="content.image.src" class="w-full max-w-[900px]" />
        </div>
      </div>
    </div>
  </LayoutsScrollablePost>
</template>
