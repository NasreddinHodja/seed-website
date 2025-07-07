<script setup lang="ts">
const emit = defineEmits<{
  (e: "load", event: Event): void;
}>();

defineProps<{
  url: string;
}>();

const isLoading = ref(true);
</script>

<template>
  <div class="relative w-full h-auto">
    <div v-if="isLoading" class="absolute inset-0 bg-black animate-pulse"></div>

    <img
      :src="url"
      @load="
        isLoading = false;
        emit('load', $event);
      "
      class="w-full h-auto"
      :class="{ invisible: isLoading }"
    />
  </div>
</template>
