export default {
  en: {
    title: "PBH Gallery",
    pictures: Array.from({ length: 69 }, (_, i) => ({
      link: r2Url("images", `pbh_gallery_${i + 1}.jpg`),
      src: r2Url("images", `pbh_gallery_thumbnail_${i + 1}.webp`),
    })),
  },
};
