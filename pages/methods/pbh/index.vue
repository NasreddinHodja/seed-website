<script setup lang="ts">
import index from "@/content/methods/pbh/index";

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
  <div
    class="w-full flex flex-col items-start justify-center px-6 md:px-16 gap-10 md:gap-14 pt-4 pb-14 md:pt-14 overflow-scroll"
  >
    <SharedLangButton />

    <h1>{{ content.title }}</h1>

    <NuxtLink
      :to="content.gallery.link"
      class="bg-white text-black text-xl font-bold px-2 w-fit"
    >
      {{ content.gallery.label }}
    </NuxtLink>

    <a
      :href="content.flyer.link"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center justify-center w-full"
    >
      <img :src="content.flyer.src" class="md:w-1/2 mx-auto" />
    </a>

    <div class="flex flex-col gap-10">
      <p v-for="paragraph in content.description" v-html="paragraph"></p>
    </div>

    <h2>{{ content.expoGuide.title }}</h2>

    <div class="flex flex-col gap-10">
      <p
        v-for="paragraph in content.expoGuide.description"
        v-html="paragraph"
      ></p>
    </div>

    <h3>{{ content.expoGuide.ambients.title }}</h3>

    <p v-html="content.expoGuide.ambients.description"></p>

    <div class="flex flex-col gap-4">
      <a
        v-for="room in content.expoGuide.ambients.rooms"
        :href="room.link"
        class="bg-white text-black px-2 text-xl w-fit"
      >
        {{ room.label }}
      </a>
    </div>

    <h2>{{ content.credits.title }}</h2>

    <p v-html="content.credits.description"></p>

    <div class="flex flex-col gap-8">
      <h3>{{ content.credits.seed.title }}</h3>

      <SharedCreditsList :names="content.credits.seed.members" />
    </div>

    <div class="flex flex-col gap-8">
      <h3>{{ content.credits.artists.title }}</h3>

      <SharedCreditsList :names="content.credits.artists.artists" />

      <h4>{{ content.credits.artists.hivemind.title }}</h4>

      <SharedCreditsList :names="content.credits.artists.hivemind.members" />

      <h4>{{ content.credits.artists.seed.title }}</h4>

      <SharedCreditsList :names="content.credits.artists.seed.members" />
    </div>

    <div v-for="section in creditSections" class="flex flex-col gap-8">
      <h3>{{ section.title }}</h3>

      <SharedCreditsList :names="section.members" />
    </div>

    <div class="flex flex-col gap-8">
      <h3>{{ content.credits.visualId.title }}</h3>

      <h4>{{ content.credits.visualId.credits.graphicProject.title }}</h4>
      <SharedCreditsList
        :names="content.credits.visualId.credits.graphicProject.members"
      />

      <h4>{{ content.credits.visualId.credits.motionDesign.title }}</h4>
      <SharedCreditsList
        :names="content.credits.visualId.credits.motionDesign.members"
      />

      <h4>{{ content.credits.visualId.credits.videoEditing.title }}</h4>
      <SharedCreditsList
        :names="content.credits.visualId.credits.videoEditing.members"
      />
    </div>

    <div class="flex flex-col gap-8">
      <h3>{{ content.credits.expoGuide.title }}</h3>

      <h4>{{ content.credits.expoGuide.credits.writting.title }}</h4>
      <SharedCreditsList
        :names="content.credits.expoGuide.credits.writting.members"
      />

      <h4>{{ content.credits.expoGuide.credits.presentationTexts.title }}</h4>
      <SharedCreditsList
        :names="content.credits.expoGuide.credits.presentationTexts.members"
      />

      <h4>{{ content.credits.expoGuide.credits.roomsTexts.title }}</h4>
      <SharedCreditsList
        :names="content.credits.expoGuide.credits.roomsTexts.members"
      />

      <h4>{{ content.credits.expoGuide.credits.proofReading.title }}</h4>
      <SharedCreditsList
        :names="content.credits.expoGuide.credits.proofReading.members"
      />

      <h4>{{ content.credits.expoGuide.credits.layout.title }}</h4>
      <SharedCreditsList
        :names="content.credits.expoGuide.credits.layout.members"
      />
    </div>

    <div class="flex flex-col gap-8">
      <h3>{{ content.credits.records.title }}</h3>

      <h4>{{ content.credits.records.credits.photography.title }}</h4>
      <SharedCreditsList
        :names="content.credits.records.credits.photography.members"
      />

      <h4>{{ content.credits.records.credits.video.title }}</h4>
      <SharedCreditsList
        :names="content.credits.records.credits.video.members"
      />

      <h4>{{ content.credits.records.credits.editing.title }}</h4>
      <SharedCreditsList
        :names="content.credits.records.credits.editing.members"
      />

      <h4>{{ content.credits.records.credits.writting.title }}</h4>
      <SharedCreditsList
        :names="content.credits.records.credits.writting.members"
      />

      <h4>{{ content.credits.records.credits.layout.title }}</h4>
      <SharedCreditsList
        :names="content.credits.records.credits.layout.members"
      />
    </div>

    <div class="flex flex-col gap-8">
      <h2>{{ content.thanks.title }}</h2>
      <p v-for="paragraph in content.thanks.description" v-html="paragraph"></p>
    </div>

    <div class="w-full md:w-1/2 mx-auto">
      <video controls class="w-full">
        <source :src="content.artifactVideo.src" type="video/mp4" />
      </video>
      <a
        :href="content.artifactVideo.link"
        class="text-xl bg-white text-black font-bold"
        >>{{ content.artifactVideo.label }}</a
      >
    </div>
  </div>
</template>
