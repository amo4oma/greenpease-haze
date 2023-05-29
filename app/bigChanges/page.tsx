'use client'
import Image from 'next/image'
import logo from '../public/logo.png'
import Nav from '../components/Nav'
import Form from '../components/Form'
import Button from '../components/Button'
import Head from 'next/head'
import { motion } from "framer-motion"
import { fadeIn } from "../motions"
import Cu from "../components/CuLogo"
import Footer from '../components/Footer'


const names = ["forest.png", "ocean.png", "climate&energy.png", "food for life (1).png", "food for life (1).png", "others.png"];
export default function Home() {
  return (

    <main className="overflow-hidden">
      <Head>
        {/* This ways to add css on global website use css @import property and you also paste Link tag also */}

        <style>
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700;800&display=swap');
        </style>

      </Head>
      <Nav />
      <Cu />
      <div className='hero-big h-[100vh] pt-[100px] container overflow-hidden'>
        <div className="grid-container grid xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-items-center">
          <div className="col-span-1">
            <h1 className='text-[50px] font-bold w-[100%] font-noto text-white'>Big changes <br />start <span className='text-[#66CC00]'>small.</span></h1>
            <p className='text-white'>A small donation can spark a world of change in<br /> the fight against the haze.</p>
          </div>
          <div className="p-10">  <Form /></div>
        
        </div>
 
     
 
      <div className=""></div>

       


      </div>
      <section id='big-every-ringgit'>
        <div className="grid-container grid grid-cols-2 text-white">
          <div className="every-ringgit-text p-20">
            <h1 className='text-[35px] font-bold'>Every ringgit helps us
fight harder.</h1>
<p>Every day, we investigate, campaign and lobby to protect not just Malaysia;
but the planet as a whole. We hold governments and corporations accountable
through peaceful, direct action – and we do it all thanks to your donations.
We’ll fight the good fight, but we need your support.  </p>
<Button title={'HELP THE PLANET'} bg={'bg-[#66CC00]'} />
          </div>
        </div>

      </section>
      <section id='donation-go2'>
        <div className="container bg-[#064A06] pt-10">
          <div className="text-center">
          <motion.div     initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration:  0.3 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: -100 }
                }}>
            <h1 className='text-[35px] font-bold text-white'>Where your donations go.</h1>
            <p className='text-white'>We carefully manage donations to maximize your support, and to give the planet its best possible chance to thrive.</p>
                </motion.div>
          </div>
          <div className="icon-list flex flex-wrap items-center justify-between p-20  ">
            {names.map((src, index) => (
                <motion.div     initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: index * 0.3 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 }
                }}>
                        <img key={index} width={150}
                src={src}
              >

              </img>
                </motion.div>
        
            ))}

          </div>

        </div>
      </section>
      <section className='  h-[100%] text-black'>
              <div className="container">
                <div className="flex items-center justify-center container px-[10em] py-[5em]">
                  <div className="col p-5 align-middle">
                    <h1 className='text-[45px] font-bold   '>We need them, and 
they need us to act.</h1>
<p>The oceans, forests, freshwater and climate aren’t just vital 
to wildlife – they’re also vital for every Malaysian’s wellbeing.
They’re the very life support systems of our planet. We need
them, and they need us to act.

</p>
<Button bg={'bg-[#66CC00]'} title={'ACT NOW'} />
                  </div>
                  <div className="col-span-1   ">
                    <img className='w-[100%] pr-[20px]' src="../Mask group (5).png" alt="" />
                  </div>
                  <div className="col-span-1   ">
                    <img className='w-[100%] pl-[20px]' src="../close-up-picture-hand-holding-planting-sapling-plant 1.png" alt="" />
                  </div>
                </div>
              </div>
      </section>
      <section id='victories' className='bg-[#66CC00] pb-[70px]'>
              <div className="container mx-auto text-center">
                <h1 className='text-white text-[55px] text-center font-bold pt-5'>Our victories against the haze.</h1>
                <div className="max-[520px]:flex-col flex lg:flex-row gap-10 px-[5em] py-[5em] justify-between items-center">
            
                  <div className="w-[100%]   bg-black bg-opacity-20 rounded-lg flex-grow text-start">
                    <img className='w-[100%] object-contain'  src="Mask group (6).png" alt="" />
                    <div className="card-body h-[320px] p-7">
                      <span className='date text-white'>2019</span>
                      <h2 className='title text-lg font-semibold text-[#064A06]'>Shutting down of illegal waste recycling factories.</h2>
                      <p className='text-white'>We investigated the imported plastic waste trade and published our findings in “The Recycling Myth: Malaysia and the Broken Global Recycling System” report. This prompted the Ministry of Energy, Science, Technology, Environment and Climate Change (MESTECC) to raid and shut down illegal waste recycling factories.</p>
                    </div>
                  </div>
                  <div className="w-[100%]   bg-black bg-opacity-20 rounded-lg flex-grow text-start">
                    <img className='w-[100%] object-contain'  src="Mask group (7).png" alt="" />
                    <div className="card-body h-[320px]  p-7">
                      <span className='date text-white'>2020</span>
                      <h2 className='title text-lg font-semibold text-[#064A06]'>HSBC stops funding companies that destroy Indonesian rainforests.</h2>
                      <p className='text-white text-[14px]'>We investigated and found that HSBC was linked to companies destroying Indonesia’s rainforests. Hundreds of thousands of people joined our campaign in demanding HSBC to stop funding these destructive companies. In response, HSBC introduced the ‘No Deforestation, No Peat, No Exploitation’ policy, which refuses finance for companies that clear forests and peatlands, and cut all ties with these destructive companies.</p>
                    </div>
                  </div>
                  <div className="w-[100%] bg-black bg-opacity-20 rounded-lg flex-grow text-start">
                  <img className='rounded-lg w-[100%] object-contain' src="Mask group (8).png" alt="" />
                    <div className="card-body h-[320px]  p-7">
                    <span className='date text-white'>2021</span>
                    <h2 className='title text-lg font-semibold text-[#064A06]'>Maybank commits to 
net-zero emissions.</h2>
                    <p className='text-white'>Following our 2020 campaign for the banking sector to live up to sustainability promises, Maybank in 2021 announced plans to stop financing new coal activities. The Malaysian bank further committed to be carbon-neutral by 2030, and to achieve net-zero carbon emissions by 2050.</p>
                    </div>
                  </div>
                </div>
     
              </div>
      </section>
                <section id='magic'>
                  <div className="container text-center pb-[150px]">
                    <div className="text pt-[10%] relative z-10 text-white px-[150px] py-[50px]">
                      <h1 className='text-[35px] font-bold'>Get a Magic Seed Pencil when you
                        become a regular donor.</h1>
                        <p>Regular donors receive a special gift of appreciation – a Magic Seed Pencil. 
                        The pencil works like any ordinary pencil, but the end of the pencil contains plant seeds that can be planted by sticking the pencil into soil.
                        The seed then sprouts and grows, just like the impact of your donations on the environment.</p>
                    </div>
                    <div className="btn-container relative z-10 grid grid-cols-2 gap-20 pl-[150px] pr-[150px]">
                      <Button bg={'bg-[#66CC00]'} title={'Become a Regular Donor today'} />
                      <Button bg={'bg-[#66CC00]'} title={'More about the Magic Seed Pencil'} />
                    </div>
                  </div>

                </section>
                <section id='small-part-II'>
                    <div className="container mx-auto px-[20em] py-[7em]">
                      <div className=" ">
                        <div className="text-center text-white relative z-20">
                            <h1 className='text-[35px] font-bold'>We’re a small part of
a larger movement.</h1>
<p className=' '>Greenpeace Malaysia is a small part of a larger movement. We march alongside a global collective of passionate people who work together to hold governments and corporations accountable. We’re people-powered. We’re for the planet. We’re Greenpeace – and we need you.</p>
                       <Button bg={'bg-[#66CC00]'} title={"HELP US FIGHT FOR THE PLANET"} />
                        </div>
          
                      </div>
                    </div>
                </section>
    <Footer />
    </main>
  )
}
