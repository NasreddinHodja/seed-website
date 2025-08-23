<script setup lang="ts">
import index from "~~/content/merch/index";

const content = index.en;
</script>

<template>
  <LayoutsScrollablePost>
    <div
      v-for="option in content.options"
      :key="option.url"
      class="flex w-full"
    >
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
  </LayoutsScrollablePost>
</template>
