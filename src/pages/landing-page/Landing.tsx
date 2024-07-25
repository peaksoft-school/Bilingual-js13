import Footer from '../../widgets/landing/footer/Footer'
import Features from '../../widgets/landing/features/Features'
import LearnMore from '../../widgets/landing/learnMore/components/LearnMore'
import OurTeam from '../../widgets/landing/our-team/OurTeam'
import Partners from '../../widgets/landing/partners/components/Partners'
import Prove from '../../widgets/landing/prove/components/Prove'
import Reviews from '../../widgets/landing/reviews/Reviews'
import StatisticsDisplay from '../../widgets/landing/statistics/StatisticsDisplay'

const Landing = () => (
   <>
      <Prove />
      <StatisticsDisplay />
      <Features />
      <OurTeam />
      <LearnMore />
      <Reviews />
      <Partners />
      <Footer />
   </>
)

export default Landing
