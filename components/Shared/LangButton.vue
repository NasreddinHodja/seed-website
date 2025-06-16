<script setup lang="ts">
const lang = useCookie<"pt" | "en">("lang", { default: () => "en" });
</script>

<template>
  <div class="flex">
    <div
      class="font-bold px-3"
      :class="{
        'bg-white text-black': lang === 'pt',
        'bg-black text-white': lang === 'en',
      }"
      @click="lang = 'pt'"
    >
      PT
    </div>
    <div
      class="font-bold px-3"
      :class="{
        'bg-white text-black': lang === 'en',
        'bg-black text-white': lang === 'pt',
      }"
      @click="lang = 'en'"
    >
      EN
    </div>
  </div>
</template>
