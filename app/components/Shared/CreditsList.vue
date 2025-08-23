<script setup lang="ts">
const props = defineProps<{
  names: MaybeLinkedName[];
}>();

const isLinked = (names: MaybeLinkedName[]): boolean => {
  return (
    names.length > 0 &&
    typeof names[0] === "object" &&
    "label" in names[0] &&
    "link" in names[0]
  );
};

const onlyNames = computed(() => props.names as Name[]);
const linkedNames = computed(() => props.names as LinkedName[]);
</script>

<template>
  <div class="border-l-4 border-white pl-10">
    <div v-if="isLinked(names)" class="flex flex-col gap-4">
      <SharedLink
        v-for="credit in linkedNames"
        :key="credit.link"
        :url="credit.link"
        class="text-xl w-fit italic"
      >
        {{ credit.label }}
      </SharedLink>
    </div>
    <div v-else class="flex flex-col gap-4">
      <span v-for="name in onlyNames" :key="name" class="text-xl italic">{{
        name
      }}</span>
    </div>
  </div>
</template>
