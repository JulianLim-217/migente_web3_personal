import BottomNavbar from '@/components/BottomNavbar'
import FaqSection from '@/components/FaqSection'
import HeroSection from '@/components/HeroSection'
import MintSection from '@/components/MintSection'
import Navbar from '@/components/Navbar'
import NftSection from '@/components/NftSection'
import ProjectSection from '@/components/ProjectSection'
import TeamSection from '@/components/TeamSection'
import UtilityEarningSection from '@/components/UtilityEarningSection'
import TheMintSection from '@/components/TheMintSection'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  

  return (
    <div className="homepage=conatiner">
      <Head>
        <title>Migente</title>
        <meta name="description" content="Web3" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <BottomNavbar />

        {/* Section starts */}
        <HeroSection />
        <ProjectSection />
        <UtilityEarningSection />
        <TheMintSection />
        {/* <TeamSection /> */}
        <NftSection />
        <MintSection />
        <FaqSection />
        {/* Section ends */}
      </div>
    </div>
  )
}
