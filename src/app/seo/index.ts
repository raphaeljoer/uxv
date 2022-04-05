export const tags = {
  name: 'UXVolution',
  description: '',
  canonical: 'https://uxv.co/',
  locale: 'pt-br',
  type: 'website',
  defaultImage: '/assets/app/opengraph/app.jpg'
};

export const twitter = {
  handle: '@uxvolution',
  site: tags.canonical,
  cardType: 'summary_large_image'
};

export const openGraph = {
  title: tags.name,
  description: tags.description,
  url: tags.canonical,
  type: tags.type,
  locale: tags.locale,
  site_name: tags.name,
  images: [
    {
      url: tags.defaultImage,
      width: 1280,
      height: 720,
      alt: tags.name
    }
  ]
};

export const metaSEO = {
  ...openGraph,
  ...twitter
};
