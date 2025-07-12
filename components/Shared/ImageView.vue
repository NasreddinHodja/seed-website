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
  <div class="inline-flex relative">
    <div v-if="url === ''">
      <div
        class="w-[600px] h-[600px] bg-gray-900 flex items-center justify-center text-white"
      >
        NULL
      </div>
    </div>

    <div v-else>
      <img
        ref="img"
        :src="url"
        @load="handleLoad"
        class="max-h-screen max-w-screen object-scale-down"
      />
      <div v-if="isLoading" class="absolute inset-0 bg-black/50"></div>
    </div>
  </div>
</template>
