<script setup lang="ts">
const emit = defineEmits<{
  (e: "load", event: Event): void;
}>();

defineProps<{
  picture: Picture;
}>();

const img = ref<HTMLImageElement | null>(null);
const isLoading = ref(true);
const isExpanded = ref(false);

const expandImage = (e: Event) => {
  isExpanded.value = true;
};

const collapseImage = () => {
  isExpanded.value = false;
};

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
  <div>
    <div @click="expandImage">
      <SharedImageView :url="picture.thumbUrl" @load="handleLoad" />
    </div>
    <SharedFullImageView
      v-if="isExpanded"
      :url="picture.originUrl"
      @close="collapseImage"
    />
  </div>
</template>
