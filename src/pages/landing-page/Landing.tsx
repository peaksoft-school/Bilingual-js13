import Prove from '../../widgets/landing/prove/components/Prove'
import Footer from '../../widgets/landing/footer/Footer'
import OurTeam from '../../widgets/landing/our-team/OurTeam'
import Reviews from '../../widgets/landing/reviews/Reviews'
import Features from '../../widgets/landing/features/Features'
import Partners from '../../widgets/landing/partners/components/Partners'
import LearnMore from '../../widgets/landing/learnMore/components/LearnMore'
import StatisticsDisplay from '../../widgets/landing/statistics/StatisticsDisplay'
import UsefulVideo from '../../widgets/usefulVideo/components/UsefulVideo'

const Landing = () => (
   <>
      <Prove />
      <StatisticsDisplay />
      <Features />
      <OurTeam />
      <UsefulVideo/>
      <LearnMore />
      <Reviews />
      <Partners />
      <Footer />
   </>
)

export default Landing
