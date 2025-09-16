<script setup lang="ts">
defineProps<{
  credits: {
    title: string;
    names: MaybeLinkedName[];
  }[];
}>();
</script>

<template>
  <div
    v-for="(credit, index) in credits"
    :key="index"
    class="flex flex-col gap-6"
  >
    <h2>{{ credit.title }}</h2>
    <SharedCreditsList :names="credit.names" />
  </div>
</template>
