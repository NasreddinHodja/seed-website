<script setup lang="ts">
const emit = defineEmits<{
  (e: "load", event: Event): void;
}>();

withDefaults(
  defineProps<{
    picture: Picture;
    width?: number;
    height?: number;
  }>(),
  {
    width: 300,
    height: 200,
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
    <div
      v-if="isLoading"
      class="flex justify-center items-center w-full h-full"
    >
      <div
        class="bg-gray-800"
        :style="{ width: width + 'px', height: height + 'px' }"
      ></div>
    </div>
    <SharedFullImageView
      v-if="isExpanded"
      :url="picture.url"
      @close="collapseImage"
    />
  </div>
</template>
