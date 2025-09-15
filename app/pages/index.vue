<script setup lang="ts">
import index from "~~/content/index";

const content = index.en;
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <NuxtImg :src="content.backgroundImage" sizes="300 md:600" class="pb-32" />

    <div class="absolute bottom-0 left-0 w-full flex flex-col px-4">
      <div
        class="w-full flex flex-col lg:flex-row lg:justify-between gap-2 pb-14 md:pb-2"
      >
        <HomeContactCard
          :title="content.contacts.label"
          :contacts="content.contacts.links"
        />

        <div class="font-header text-xs text-gray-400 flex lg:items-end gap-1">
          by
          <SharedLink
            url="https://github.com/NasreddinHodja"
            class="text-white"
          >
            nas
          </SharedLink>
        </div>
      </div>
    </div>
  </div>
</template>
