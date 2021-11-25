export function getSocialMetas({
    url,
    title = 'Front-end development was hard before remix',
    description = 'Better late than too early',
    image = 'https://www.lorempixel.com/800/600',
    keywords = '',
  }: {
    image?: string
    url: string
    title?: string
    description?: string
    keywords?: string
  }) {
    return {
      title,
      description,
      keywords,
      image,
      'og:url': url,
      'og:title': title,
      'og:description': description,
      'og:image': image,
      'twitter:card': image ? 'summary_large_image' : 'summary',
      'twitter:creator': '@aflorescu',
      'twitter:site': '@aflorescu',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image,
      'twitter:alt': title,
    }
  }