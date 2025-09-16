<script setup lang="ts">
const emit = defineEmits<{
  (e: "load", event: Event): void;
}>();

withDefaults(
  defineProps<{
    picture: Picture;
    width?: number;
  }>(),
  {
    width: 300,
  }
);

const img = ref<HTMLImageElement | null>(null);
const isLoading = ref(true);
const isExpanded = ref(false);

const expandImage = (_e: Event) => {
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
      <NuxtImg :src="picture.url" :width="width" @load="handleLoad" />
    </div>
    <SharedFullImageView
      v-if="isExpanded"
      :url="picture.url"
      @close="collapseImage"
    />
  </div>
</template>
