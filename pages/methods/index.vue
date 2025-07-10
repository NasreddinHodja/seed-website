<script setup lang="ts">
import index from "@/content/methods/index";

const content = index.en;
</script>

<template>
  <div
    class="w-full flex flex-col items-start justify-center px-6 my-auto md:px-16 gap-10 md:gap-16 pt-14 pb-28 md:pt-32 overflow-auto"
  >
    <div class="flex flex-col gap-10 md:gap-16">
      <div v-for="option in content.options">
        <h1>
          <NuxtLink :to="option.url">{{ option.title }}</NuxtLink>
        </h1>
      </div>
    </div>
  </div>
</template>
