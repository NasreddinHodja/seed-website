<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    pictures: Picture[];
    title?: string;
    collapsed?: boolean;
    stepSize?: number;
  }>(),
  {
    title: "imgs",
    collapsed: true,
    stepSize: 12,
  }
);

const masonryRef = ref<HTMLElement | null>(null);
const columnCount = ref(1);
const isCollapsed = ref(props.collapsed);
const revealed = ref(isCollapsed.value ? 0 : 5);
const imageHeights = reactive<Record<string, number>>({});
const isComputingColumns = ref(false);

const visibleColumns = computed(() => {
  const items = props.pictures.slice(0, revealed.value);
  const columns: (typeof items)[] = Array.from(
    { length: columnCount.value },
    () => []
  );
  const heights = Array(columnCount.value).fill(0);

  for (const item of items) {
    const h = imageHeights[item.thumbUrl] ?? 100;
    const i = heights.indexOf(Math.min(...heights));
    if (columns[i]) {
      columns[i].push(item);
      heights[i] += h;
    }
  }

  return columns;
});

const collapse = () => {
  isCollapsed.value = true;
};

const expand = async () => {
  isCollapsed.value = false;
  if (revealed.value === 0) {
    revealMore();
  }
  nextTick(() => nextTick(updateColumnCount));
};

const revealMore = () => {
  revealed.value = Math.min(
    props.pictures.length,
    revealed.value + props.stepSize
  );
};

const toggleCollapse = () => {
  if (isCollapsed.value) expand();
  else collapse();
};

const updateColumnCount = () => {
  const el = masonryRef.value;
  if (!el) return;

  const width = el.offsetWidth;

  if (width < 400) columnCount.value = 1;
  else if (width < 800) columnCount.value = 2;
  else columnCount.value = 3;
};

const onImageLoad = (key: string, e: Event) => {
  const el = e.target as HTMLImageElement;
  if (el !== null) imageHeights[key] = el.offsetHeight;
};

onMounted(() => {
  updateColumnCount();
  window.addEventListener("resize", updateColumnCount);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateColumnCount);
});
</script>

<template>
  <div class="flex flex-col gap-10 p-4 md:p-6 border-[2px] white">
    <div class="flex justify-between items-center" @click="toggleCollapse()">
      <h2>{{ title }}</h2>

      <div class="flex gap-4 jutify-center">
        <span class="text-lg text-neutral-100"
          >({{ props.pictures.length }})</span
        >
        <div v-if="isCollapsed" class="flex items-center justify-center">
          <Icon name="meteor-icons:chevron-down" class="w-6 h-6" />
        </div>
        <div v-else class="flex items-center justify-center">
          <Icon name="meteor-icons:chevron-up" class="w-6 h-6" />
        </div>
      </div>
    </div>

    <div v-if="!isCollapsed" class="flex flex-col gap-5">
      <div ref="masonryRef" class="flex gap-4">
        <div
          v-for="(column, colIndex) in visibleColumns"
          :key="colIndex"
          class=""
          :class="{
            'flex flex-col gap-4 flex-1 invisible': isComputingColumns,
            'flex flex-col gap-4 flex-1 visible': !isComputingColumns,
          }"
        >
          <SharedExpandableImageView
            v-for="picture in column"
            :key="picture.originUrl"
            :picture="picture"
            class="w-full"
            @load="(e) => onImageLoad(picture.thumbUrl, e)"
          />
        </div>
      </div>

      <div
        v-if="visibleColumns.flat().length !== pictures.length"
        class="text-lg hover:underline flex justify-end"
        @click="revealMore"
      >
        show more
      </div>
    </div>
  </div>
</template>
