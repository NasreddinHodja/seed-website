<script setup lang="ts">
import index from "@/content/web3/index";

const content = index.en;
</script>

<template>
  <div
    class="w-full flex flex-col items-start justify-center px-6 md:px-16 gap-10 md:gap-16 pt-4 pb-14 md:pt-32 overflow-auto"
  >
    <div v-for="option in content.options">
      <h1>
        <NuxtLink :to="option.url">{{ option.title }}</NuxtLink>
      </h1>
    </div>
  </div>
</template>
