'use client'
import Image from 'next/image'
import logo from '../public/logo.png'
import Nav from './components/Nav'
import Form from './components/Form'
import Button from './components/Button'
import Head from 'next/head'
import { motion } from "framer-motion"
import { fadeIn } from "./motions"
import Cu from "./components/CuLogo"
import Footer from './components/Footer'


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
      <div className='hero-haze h-full pt-[100px] container overflow-hidden'>
        <div className="grid-container grid xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-items-center">
          <div className="col-span-1 w-[50%]">
            <h1 className='text-[50px] font-bold w-[100%] font-noto'>Help Malaysia breathe again.</h1>
            <p>A small donation can spark a world of change in<br /> the fight against the haze.</p>
          </div>
          <div className="p-10">    <Form /></div>
      
        </div>
 
        <div className="culprit-container container flex flex-row bg-[#66CC00] mt-[200px] mx-auto w-[80%] rounded-lg overflow-hidden p-8 text-white">
          <div className="culprit-text-container m-5">
            <h1 className='text-[35px] font-bold'>The real culprit behind the haze.</h1>
            <p>The air quality has dropped. The heat has turned up. Malaysia’s climate is cooking, and the culprit is the destruction of peatlands in Malaysia and Indonesia. As these peatlands get destroyed, they dry up and lead to peat fires – resulting in smoke haze.</p>
          </div>
          <img className='mr-3 sm:w-[20%] lg:w-[100%] object-contain' src="/Group 23.png" alt=" dfgcx" />
          <img className='sm:w-[20%] lg:w-[100%] object-contain' src="Group 24.png" alt="dfxdf" />
        </div>
 
        <div className="flex flex-col items-center justify-center relative">
          <div className="w-[40%] pb-5">
            <h1 className='text-[55px] font-semibold text-center mt-[150px]'>We have to try.</h1>
            <p className='font-noto text-center text-[20px]'>For a long time, the haze seemed like an unsolvable climate problem.
              But today, we know how to fix it – and we can’t afford not to try.</p>
          </div>

          <Button bg={'bg-[#66CC00]'} title={'Help Malaysia breathe again'} />

          <img className=' ' src='/3section2-01.png' />

        </div>

       


      </div>
      <section id='donation-go'>
        <div className="container">
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
      <section className='every-ringgit h-[110vh] text-white'>
              <div className="container">
                <div className="grid grid-cols-3   pl-[100px] pt-[100px] ml-[50px]">
                  <div className="col p-5">
                    <h1 className='text-[35px] font-bold  pt-[150px] '>Every ringgit helps us
fight harder.</h1>
<p>Every day, we investigate, campaign and lobby to protect not just Malaysia; but the planet as a whole. We hold governments and corporations accountable through peaceful, direct action – and we do it all thanks to your donations. We’ll fight the good fight, but we need your support.

</p>
<Button bg={'bg-[#66CC00]'} title={'Help THE PLANET'} />
                  </div>
                  <div className="col-span-4"></div>
                </div>
              </div>
      </section>
      <section id='victories' className='bg-[#000] pb-[70px]'>
              <div className="container mx-auto text-center">
                <h1 className='text-white text-[55px] text-center font-bold pt-5'>Our victories against the haze.</h1>
                <div className="max-[520px]:flex-col flex lg:flex-row  justify-between items-center">
            
                  <div className="w-[50%] m-20 bg-[#66CC00] rounded-lg flex-grow text-start">
                    <img className='w-[100%] object-contain'  src="col-2.png" alt="" />
                    <div className="card-body p-7">
                      <span className='date text-white'>2017</span>
                      <h2 className='title text-lg font-semibold text-[#064A06]'>HSBC stops funding companies that destroy Indonesian rainforests.</h2>
                      <p>We investigated and found that HSBC was linked to companies destroying Indonesia’s rainforests. Hundreds of thousands of people joined our campaign in demanding HSBC to stop funding these destructive companies. In response, HSBC introduced the ‘No Deforestation, No Peat, No Exploitation’ policy, which refuses finance for companies that clear forests and peatlands, and cut all ties with these destructive companies.</p>
                    </div>
                  </div>
                  <div className="w-[50%]  m-20  bg-[#66CC00] rounded-lg flex-grow text-start">
                  <img className='rounded-lg w-[100%] object-contain' src="col-1.png" alt="" />
                    <div className="card-body p-7">
                    <span className='date text-white'>2017</span>
                    <h2 className='title text-lg font-semibold text-[#064A06]'>IOI Group eliminates deforestation and exploitation from supply chain.</h2>
                    <p>To protest deforestation and exploitation of rainforests and peatlands by IOI Group, Greenpeace supporters blockaded IOI’s palm oil refinery in Rotterdam – bringing their operations to a halt. Then, we submitted a global petition signed by 300,000 people to IOI group. In response, IOI began proactively monitoring their supply chain to ensure that no suppliers were destroying rainforests or peatlands.</p>
                    </div>
                  </div>
                </div>
                <Button bg={'bg-[#66CC00]'} title={'Be a part of our next victory against Haze'} />
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
                <section id='small-part'>
                    <div className="container mx-auto">
                      <div className="grid grid-cols-2 md:grid-cols-1 min-[500px]:grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="text pl-40 mt-40 mb-28 min-[500px]:pl-1 min-[500px]:pb-[300px] lg:pb-[10px] lg:pl-40">
                            <h1 className='text-[35px] font-bold'>We’re a small part of
a larger movement.</h1>
<p>Greenpeace Malaysia is a small part of a larger movement. We march alongside a global collective of passionate people who work together to hold governments and corporations accountable. We’re people-powered. We’re for the planet. We’re Greenpeace – and we need you.</p>
                       <Button bg={'bg-[#66CC00]'} title={"HELP US FIGHT FOR THE PLANET"} />
                        </div>
                        <div className="relative">
                          <img className='absolute bottom-[-90px] z-0' src="/clean-air.png" alt="clean-air.png" />
                        </div>
                      </div>
                    </div>
                </section>
                  <Footer />
    </main>
  )
}
