<script setup lang="ts">
import index from "@/content/about/index";

const content = index.en;
</script>

<template>
  <div class="w-screen flex items-center justify-center">
    <SharedVideoBackground :src="r2Url('videos', 'seed.mp4')" />

    <div
      class="flex flex-col xl:grid xl:grid-cols-2 gap-10 px-6 md:px-16 pb-14 md:pb-16 pt-10 md:pt-16"
    >
      <div class="flex flex-col gap-10">
        <AboutInfoCard
          :title="content.whoAreWe.title"
          :link="content.whoAreWe.link"
          :text="content.whoAreWe.text"
        />

        <div class="flex flex-col">
          <NuxtLink :to="content.coreMembers.link">
            <h1 class="bg-black w-fit">{{ content.coreMembers.title }}</h1>
          </NuxtLink>
        </div>

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
