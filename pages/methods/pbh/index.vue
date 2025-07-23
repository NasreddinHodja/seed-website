<script setup lang="ts">
import index from "@/content/methods/pbh/index";
import galleryContent from "@/content/methods/pbh/gallery";

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
    <SharedScrollablePostHeader :title="content.title" langButton />

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
  </LayoutsScrollablePost>
</template>
