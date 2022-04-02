const tagManager = {
  SUAMUSICA_SMV_GOOGLE_TAG_MANAGER_ID:
    process.env.SUAMUSICA_SMV_GOOGLE_TAG_MANAGER_ID,
  SUAMUSICA_SMV_GOOGLE_ANALYTICS_ID:
    process.env.SUAMUSICA_SMV_GOOGLE_ANALYTICS_ID
};

const env = {
  ...tagManager
};

const images = {
  path: '/_next/image',
  loader: 'default',
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  domains: ['source.unsplash.com']
};

module.exports = {
  env,
  images
};
