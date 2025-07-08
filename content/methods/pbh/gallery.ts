export default {
  en: {
    title: "PBH Gallery",
    pictures: Array.from({ length: 69 }, (_, i) => {
      if ([48, 49, 50, 51, 52].includes(i + 1)) return null;
      return {
        originUrl: r2Url("images", `pbh_gallery_${i + 1}.jpg`),
        thumbUrl: r2Url("images", `pbh_gallery_thumbnail_${i + 1}.webp`),
        link: r2Url("images", `pbh_gallery_${i + 1}.jpg`),
      };
    }).filter((item) => item !== null),
  },
};
