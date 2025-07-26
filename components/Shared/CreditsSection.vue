<script setup lang="ts">
import type { MaybeLinkedName } from "~/types";

defineProps<{
  credits: {
    title: string;
    names: MaybeLinkedName[];
  }[];
}>();
</script>

<template>
  <div v-for="credit in credits" class="flex flex-col gap-6">
    <h2>{{ credit.title }}</h2>
    <SharedCreditsList :names="credit.names" />
  </div>
</template>
