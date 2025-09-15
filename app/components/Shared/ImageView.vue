<script setup lang="ts">
const emit = defineEmits<{
  (e: "load", event: Event): void;
}>();

defineProps<{
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
  <div class="inline-flex relative w-full md:w-unset justify-center">
    <div v-if="url === ''" class="w-full md:w-unset">
      <div
        class="w-full md:w-[600px] h-[400px] md:h-[600px] bg-gray-900 flex items-center justify-center text-white"
      >
        NULL
      </div>
    </div>

    <NuxtImg
      v-else
      :src="url"
      class="max-h-screen max-w-screen object-scale-down"
    />
  </div>
</template>
