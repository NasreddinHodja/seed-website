<script setup lang="ts">
defineProps<{
  url: string;
}>();
</script>

<template>
  <a :href="url" targ="_blank" rel="noopener noreferrer" class="block">
    <slot />
  </a>
</template>
