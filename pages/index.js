import Head from 'next/head'
import 'react-calendar/dist/Calendar.css';

import Entry from '../components/Entry'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
   
            </Head>
          <Entry/>
            {/* <Booking /> */}
            {/* <Sidebar/> */}
          </div>
          )
}
