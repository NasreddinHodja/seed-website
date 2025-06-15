<script setup lang="ts">
import index from "@/content/index";

const content = index.en;
const contacts = content.contacts.links;
</script>

<template>
  <div class="h-full w-screen flex flex-col items-center justify-center">
    <img class="px-10 pb-32" :src="content.backgroundImage" />
    <div class="absolute bottom-0 left-0 w-full flex flex-col px-4">
      <div
        class="w-full flex flex-col lg:flex-row lg:justify-between gap-2 pb-2"
      >
        <div class="flex flex-col gap-1">
          <div class="font-header text-sm">{{ content.contacts.label }}</div>

          <div class="flex flex-col gap-0.5">
            <div
              v-for="contact in contacts"
              class="font-header text-xs text-gray-400"
            >
              <a
                v-if="contact.url !== null"
                :href="contact.url"
                target="_blank"
                rel="noopener noreferrer"
                >{{ contact.label }}</a
              >
              <div v-else>{{ contact.label }}</div>
            </div>
          </div>
        </div>
        <div class="font-header text-xs text-gray-400 flex lg:items-end gap-1">
          by
          <a
            class="text-white"
            href="https://github.com/NasreddinHodja"
            target="_blank"
            rel="noopener noreferrer"
          >
            nas</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
