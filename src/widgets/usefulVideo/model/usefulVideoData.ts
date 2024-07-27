import videoFirst from '../../../assets/images/bilingual-video.mp4'
import posterFirst from './../../../assets/images/poster-first.jpg'
import { cardType } from './usefulVideoType'

export const CARD_RENDER_DATA: cardType[] = [
   {
      id: 1,
      poster: posterFirst,
      video: videoFirst,
      url: 'https://www.youtube.com/embed/DQHraPSvaW4',
      title: 'Test Overview',
      text: 'Duration 1:00',
   },
   {
      id: 2,
      poster: posterFirst,
      video: videoFirst,
      url: 'https://www.youtube.com/embed/DQHraPSvaW4',
      title: 'Test Overview',
      text: 'Duration 5:00',
   },
   {
      id: 3,
      poster: posterFirst,
      video: videoFirst,
      url: 'https://www.youtube.com/embed/DQHraPSvaW4',
      title: 'Test Overview',
      text: 'Duration 2:55',
   },
]
