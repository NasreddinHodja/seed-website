<script setup lang="ts">
defineProps<{
  title: string;
  contacts: { url: string | null; label: string }[];
}>();
</script>

<template>
  <div class="flex flex-col gap-1">
    <div class="font-header text-sm">{{ title }}</div>

    <div class="flex flex-col gap-0.5">
      <div
        v-for="contact in contacts"
        class="font-header text-xs text-gray-400"
      >
        <SharedLink v-if="contact.url !== null" :url="contact.url">
          {{ contact.label }}
        </SharedLink>
        <div v-else>{{ contact.label }}</div>
      </div>
    </div>
  </div>
</template>
