<script setup lang="ts">
import index from "@/content/merch/index";

const content = index.en;
</script>

<template>
  <div
    class="w-full h-auto flex flex-col items-start justify-center px-6 md:px-16 gap-10 md:gap-16 pt-4 pb-14 md:pt-16 overflow-auto"
  >
    <div v-for="option in content.options" class="flex w-full">
      <NuxtLink :to="option.url" class="block w-full">
        <div class="flex flex-col gap-4 w-full">
          <h1>
            {{ option.title }}
          </h1>
          <img
            :src="option.picture"
            class="w-full md:w-1/2 h-auto object-cover mx-auto"
          />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
