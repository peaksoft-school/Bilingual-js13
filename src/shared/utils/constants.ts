import bezos from '../../assets/images/bezos.png'
import ariana from '../../assets/images/ariana.jpg'
import steve from '../../assets/images/jobbs.png'
import gates from '../../assets/images/bill-gates-png-9736.png'
import zuckerberg from '../../assets/images/pngimg.com - mark_zuckerberg_PNG3.png'
import taylor from '../../assets/images/taylor.jpeg'

import SelectRealWord from '../../assets/images/selectrealword.png'
import SelectRealWordSound from '../../assets/images/selectrealsound.png'
import TypeStatement from '../../assets/images/typestatement.png'
import RecordYourself from '../../assets/images/recordyourself.png'
import DescribeImage from '../../assets/images/describeimage.png'
import TypeWhatYHear from '../../assets/images/typewhathear.png'

export const REVIEWS = [
   {
      id: 1,
      description:
         'Bilingual has transformed my learning experience. The lessons are engaging and practical.',
      name: '- Jeff Bezos',
      rating: 5,
      avatar: bezos,
   },
   {
      id: 2,
      description:
         'Bilingual helped me improve my English skills with its interactive and real-life content.',
      name: '- Steve Jobs',
      rating: 5,
      avatar: steve,
   },
   {
      id: 3,
      description:
         'I love Bilingual! The daily challenges make learning fun and exciting.',
      name: '- Taylor Swift',
      rating: 5,
      avatar: taylor,
   },
   {
      id: 4,
      description:
         'Bilingual boosts my confidence with structured lessons and real-life practice.',
      name: '- Bill Gates',
      rating: 5,
      avatar: gates,
   },
   {
      id: 5,
      description:
         'Bilingual make learning English enjoyable and effective with its user-friendly interface.',
      name: '- Mark Zuckerberg',
      rating: 5,
      avatar: zuckerberg,
   },
   {
      id: 6,
      description:
         'Bilingual is a fantastic tool with diverse exercises and engaging content.',
      name: '- Ariana Grande',
      rating: 5,
      avatar: ariana,
   },
]

export const QUESTION_TYPES = [
   {
      id: 1,
      title: 'Select real English words',
      image: SelectRealWord,
   },
   {
      id: 2,
      title: 'Type what you hear ',
      image: TypeWhatYHear,
   },

   {
      id: 3,
      title: '4 Describe image',
      image: DescribeImage,
   },
   {
      id: 4,
      title: '5 Record saying statement ',
      image: RecordYourself,
   },
   {
      id: 5,
      title: 'Respond in at least 50 words',
      image: RecordYourself,
   },
   {
      id: 6,
      title: 'Respond in at least 50 words',
      image: TypeStatement,
   },
   {
      id: 7,
      title: 'Select real English words',
      image: SelectRealWordSound,
   },
]
