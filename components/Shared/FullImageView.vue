<script setup lang="ts">
const emit = defineEmits<{
  (e: "close"): void;
  (e: "load", event: Event): void;
}>();

defineProps<{
  url: string;
}>();

const img = ref<HTMLImageElement | null>(null);
const isLoading = ref(true);

const handleLoad = (e: Event) => {
  isLoading.value = false;
  emit("load", e);
};

const handleClose = () => {
  emit("close");
};

onMounted(async () => {
  await nextTick();
  if (img.value?.complete && img.value.naturalWidth > 0) {
    handleLoad(new Event("load"));
  }
});
</script>

<template>
  <div
    class="absolute top-0 left-0 w-full h-full z-10 bg-black/90 flex justify-center items-center"
    @click="handleClose"
  >
    <Icon
      name="mdi:close"
      class="w-8 h-8 absolute top-4 md:top-10 right-4 md:right-10 z-20"
      @click.stop="handleClose"
    />
    <SharedImageView
      :url="url"
      @click.stop=""
      class="max-h-full w-auto px-2 py-2"
    />
  </div>
</template>
