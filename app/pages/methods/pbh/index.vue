<script setup lang="ts">
import index from "~~/content/methods/pbh/index";
import galleryContent from "~~/content/methods/pbh/gallery";

const lang = useCookie<"pt" | "en">("lang", { default: () => "en" });

const content = computed(() => index[lang.value]);
const creditSections = [
  content.value.credits.realization,
  content.value.credits.incentives,
  content.value.credits.production,
  content.value.credits.creativeDirection,
  content.value.credits.curation,
  content.value.credits.expography,
  content.value.credits.communication,
  content.value.credits.dev,
  content.value.credits.catalogation,
  content.value.credits.accounting,
];
</script>

<template>
  <LayoutsScrollablePost>
    <SharedPostHeader :title="content.title" lang-button />

    <SharedFlyerImage
      :link="content.flyer.link"
      :src="content.flyer.src"
      class="mx-auto md:w-2/3"
    />

    <SharedPostDescription :paragraphs="content.description" />

    <SharedPostDescription
      :title="content.expoGuide.title"
      :paragraphs="content.expoGuide.description"
    />

    <SharedPostDescription
      :title="content.expoGuide.ambients.title"
      :paragraphs="[content.expoGuide.ambients.description]"
    />

    <div class="flex flex-col gap-4">
      <NuxtLink
        v-for="room in content.expoGuide.ambients.rooms"
        :key="room.label"
        :to="room.link"
        class="bg-white text-black px-2 text-xl w-fit"
      >
        {{ room.label }}
      </NuxtLink>
    </div>

    <SharedPictureGallery
      :pictures="galleryContent.en.pictures"
      class="w-full"
    />

    <SharedPostDescription
      :title="content.credits.title"
      :paragraphs="[content.credits.description]"
    />

    <SharedCreditsSection
      :credits="
        creditSections.map((c) => ({ title: c.title, names: c.members }))
      "
    />

    <SharedPostDescription
      :title="content.thanks.title"
      :paragraphs="content.thanks.description"
    />

    <SharedCaptionedFigure
      type="video"
      :src="content.artifactVideo.src"
      :link="{
        url: content.artifactVideo.link,
        label: content.artifactVideo.label,
      }"
      class="w-full md:w-1/2 mx-auto"
    />
  </LayoutsScrollablePost>
</template>
