import { Attractions } from '@/Components/Attractions';
import { Banner } from '@/Components/Banner';
import { Benefits } from '@/Components/Benefits';
import { ContactBox } from '@/Components/ContactBox';
import { Depositions } from '@/Components/Depositions';
import { Equip } from '@/Components/Equip';
import { Footer } from '@/Components/Footer';
import { Galery } from '@/Components/Galery';
import { Hotel } from '@/Components/Hotel';
import { NavBar } from '@/Components/NavBar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div id='banner'>
        <Banner />
      </div>

      <main>
        <section className='smoothScroll' id='benefits'>
          <Benefits />
        </section>

        <section className='smoothScroll' id='attractions'>
          <Attractions />
        </section>
        
        <section className='smoothScroll' id='galery'>
          <Galery />
        </section>
        
        <section className='smoothScroll' id='hotelAndMore'>
          <Hotel />
        </section>
        
        <section className='smoothScroll' id='depositions'>
          <Depositions />
        </section>
        
        <section className='smoothScroll' id='contact'>
          <ContactBox />
        </section>

        <section className='smoothScroll' id='equip'>
          <Equip />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
