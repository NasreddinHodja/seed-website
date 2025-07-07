<script setup lang="ts">
const emit = defineEmits<{
  (e: "load", event: Event): void;
  (e: "error", event: Event): void;
}>();

const props = defineProps<{
  url: string;
}>();

const img = ref<HTMLImageElement | null>(null);
const isLoading = ref(true);

function handleLoad(e: Event) {
  isLoading.value = false;
  emit("load", e);
}

function handleError(e: Event) {
  isLoading.value = false;
  emit("error", e);
  console.error("Image load failed:", props.url);
}

onMounted(() => {
  if (img.value?.complete && img.value.naturalWidth > 0) {
    handleLoad(new Event("load"));
  }
});
</script>

<template>
  <div class="relative w-full h-auto">
    <div v-if="isLoading" class="absolute inset-0 bg-black animate-pulse"></div>

    <img
      :src="url"
      @load="handleLoad"
      @error="handleError"
      class="w-full h-auto"
      :class="{ invisible: isLoading }"
    />
  </div>
</template>
