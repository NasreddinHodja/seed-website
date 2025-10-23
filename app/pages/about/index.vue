<script setup lang="ts">
import index from "~~/content/about/index";

const videoBackground = r2Url("videos", "seed.mp4");
const content = index.en;
</script>

<template>
  <div class="w-screen flex items-center justify-center">
    <SharedVideoBackground :src="videoBackground" />

    <div
      class="flex flex-col xl:grid xl:grid-cols-2 gap-10 px-6 md:px-16 pb-14 md:pb-16 pt-10 md:pt-16"
    >
      <div class="flex flex-col gap-10">
        <AboutInfoCard
          :title="content.whoAreWe.title"
          :link="content.whoAreWe.link"
          :text="content.whoAreWe.text"
        />

        <AboutContactCard
          :title="content.contactUs.label"
          :links="content.contactUs.links"
        />
      </div>

      <AboutInfoCard
        :title="content.seedPhilosophy.title"
        :text="content.seedPhilosophy.text"
      />
    </div>
  </div>
</template>
