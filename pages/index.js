import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
// Assets
import collab from '../assets/collab.svg'
import workTogether from '../assets/workTogether.svg'
import designer from '../assets/designer.svg'
import social from '../assets/social.svg'
// Components
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      {/* Banner 1 */}
      <div className={`flex flex-wrap items-center justify-center px-5 sm:px-0 mt-7 py-24`}>
        <Image src={collab} width={300} height={300} layout='intrinsic' alt='Collab 1'/>
        <h1 className='text-md  md:text-xl font-bold px-5 lg:pl-12'>social network for devs and designers</h1>
      </div>
      {/* Banner 2 */}
      <div className={`flex flex-wrap flex-row-reverse items-center justify-center px-5 sm:px-0 py-36 ${styles.ideaBanner}`}>
        <Image src={workTogether} width={330} height={200} layout='intrinsic' alt='work together'/>
        <div className='text-left lg:pr-12 z-50'>
          <h1 className='text-md md:text-xl font-bold'>bring your ideas to life</h1>
          <h3 className='text-xs md:text-sm font-light'>work with other developers and designers to make your<br/>
          projects a reality
          </h3>
        </div>
      </div>
      {/* Banner 3 */}
      <div className={`flex flex-wrap items-center justify-center px-5 sm:px-0 mt-12 py-24`}>
        <Image src={designer} width={300} height={300} layout='intrinsic' alt='designer'/>
        <div className='text-left px-6 lg:px-0 lg:pl-12 z-50'>
          <h1 className='text-md md:text-xl font-bold'>made for developers and designers </h1>
          <h3 className='text-xs md:text-sm font-light'>Spend your free time pimping out that portfolio
          with new projects
          </h3>
        </div>
      </div>
      {/* Banner 4 */}
      <div className={`flex flex-wrap flex-row-reverse items-center justify-center px-5 sm:px-0 mt-12 py-24 bg-slate-50`}>
        <Image src={social} width={300} height={300} layout='intrinsic' alt='socialize'/>
        <div className='text-left lg:pr-12'>
          <h1 className='text-md md:text-xl font-bold'>socialize and network</h1>
          <h3 className='text-xs md:text-sm font-light'>take a break, socialize and network with others</h3>
        </div>
      </div>
      {/* Banner 5 */}
      <div className={`flex flex-col items-right sm:items-center justify-center px-5 sm:px-0 mt-12 py-40`}>
        <h1 className='text-md md:text-lg font-bold'>join today and start collaborating</h1>
        <h3 className='text-xs md:text-xs font-light'>coming soon</h3>
      </div>
      {/* Footer */}
      <footer className='text-center text-2xs'>
        designed and developed by Ryle Urcia
      </footer>
    </div>
  )
}
