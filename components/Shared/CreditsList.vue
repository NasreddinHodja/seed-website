<script setup lang="ts">
defineProps<{
  credits?: { label: string; link: string }[];
  names?: string[];
}>();
</script>

<template>
  <div class="border-l-4 border-white pl-10">
    <div v-if="credits" class="flex flex-col gap-6">
      <SharedLink
        v-for="credit in credits"
        :url="credit.link"
        class="text-xl w-fit"
      >
        {{ credit.label }}
      </SharedLink>
    </div>
    <div v-if="names" class="flex flex-col gap-6">
      <span v-for="name in names">{{ name }}</span>
    </div>
  </div>
</template>
