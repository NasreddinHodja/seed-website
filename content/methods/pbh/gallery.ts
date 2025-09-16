export default {
  en: {
    title: "PBH Gallery",
    pictures: Array.from({ length: 69 }, (_, i) => {
      if ([48, 49, 50, 51, 52].includes(i + 1)) return null;
      return {
        url: r2Url("images", `pbh_gallery_${i + 1}.jpg`),
        link: r2Url("images", `pbh_gallery_${i + 1}.jpg`),
      };
    }).filter((item) => item !== null),
  },
};
