import {getRandomInt} from '../../components/PageHeader';

function generateImageMeta(text: string){
    return `https://res.cloudinary.com/adrianf/image/fetch/c_mfit,h_630,w_1200/l_text:Arial_38_bold:${text},co_white/https://adrianf-v3.netlify.app/images/responsive-headers/${getRandomInt(1, 8)}-m.jpg`
}

export function getSocialMetas({
    url,
    title = 'Front-end development was hard before remix',
    description = 'Better late than too early',
    image = generateImageMeta('I guess is 404'),
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
      image : generateImageMeta(title),
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