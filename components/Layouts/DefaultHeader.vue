<script setup lang="ts">
import header from "~/content/shared/header";

const content = header.en;
</script>

<template>
  <div
    class="w-full font-header flex justify-between items-end h-40 pb-2 px-16 bg-black"
  >
    <NuxtLink to="/"
      ><div class="text text-5xl w-60">{{ content.leftText }}</div></NuxtLink
    >
    <div class="flex gap-2">
      <div
        v-for="(item, index) in content.navigation"
        class="flex text-xl gap-2"
      >
        <div v-if="index > 0">｜</div>
        <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
      </div>
    </div>
    <div class="w-60 pb-1 flex justify-start">
      <NuxtLink to="/">
        <img :src="content.rightImage" class="w-36 min-w-36 ml-3" />
      </NuxtLink>
    </div>
  </div>
</template>
