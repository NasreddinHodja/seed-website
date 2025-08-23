<script setup lang="ts">
import index from "~~/content/methods/index";

const content = index.en;
</script>

<template>
  <LayoutsNavSectionIndex :options="content.options" />
</template>
