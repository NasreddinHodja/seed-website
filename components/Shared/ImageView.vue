<script setup lang="ts">
const emit = defineEmits<{
  (e: "load", event: Event): void;
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

onMounted(async () => {
  await nextTick();
  if (img.value?.complete && img.value.naturalWidth > 0) {
    handleLoad(new Event("load"));
  }
});
</script>

<template>
  <div class="relative flex">
    <div
      v-if="url === ''"
      class="w-[600px] h-[600px] bg-gray-400 mx-auto flex items-center justify-center text-black"
    >
      NULL
    </div>

    <div v-else-if="isLoading" class="absolute inset-0 bg-black"></div>

    <img
      ref="img"
      :src="url"
      @load="handleLoad"
      class="object-contain mx-auto"
    />
  </div>
</template>
