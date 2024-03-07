import React from "react"
import CTA_Card1 from "./CTA_Card1"
import CTA_Card2 from "./CTA_Card2"

const AboutCard = () => {
  return (
    <div className='block max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 '>
      <div>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-800 '>
          About Bitcoin
        </h5>
      </div>
      <div>
        <div className='w-full flow-root'>
          <ul role='list' className='divide-y '>
            <li className='py-3 sm:py-4'>
              <div>
                <h5 className='mb-2 text-xl font-semibold tracking-tight text-gray-800 flex'>
                  What Is Bitcoin?
                </h5>
                <div>
                  Bitcoin's price today is US$16,951.82, with a 24-hour trading
                  volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
                  currently -7.70% from its 7-day all-time high of $18,366.66,
                  and 3.40% from its 7-day all-time low of $16,394.75. BTC has a
                  circulating supply of 19.24 M BTC and a max supply of 21 M
                  BTC.
                </div>
              </div>
            </li>
            <li className='py-3 sm:py-4'>
              <div>
                <h5 className='mb-2 text-xl font-semibold tracking-tight text-gray-800 flex'>
                  Lorem ipsum dolor sit amet
                </h5>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ac cursus felis. Ut quis nisl nibh. Aenean tristique
                    sodales erat, vitae pellentesque leo placerat et. Vivamus ut
                    feugiat lorem, non euismod orci. Aliquam mattis accumsan
                    est, nec posuere nulla imperdiet vitae. Proin venenatis
                    aliquet metus, eget eleifend eros pretium eu. Donec nibh
                    dui, molestie ac tempus condimentum, molestie eu urna.
                    Curabitur ut nulla neque.
                  </p>
                  <p>
                    {" "}
                    Morbi a purus scelerisque, pharetra lacus et, dictum nulla.
                    Ut volutpat congue feugiat. Vivamus eu maximus orci. Quisque
                    efficitur iaculis mauris, in porttitor tellus ornare in.
                    Quisque at lacus tortor. Nullam porttitor ac leo non auctor.
                    Donec tempor dui ut libero aliquet eleifend. Quisque aliquet
                    augue tempor dui pharetra, non mattis nulla dictum.
                    Vestibulum dictum lacus in arcu rhoncus molestie.
                  </p>
                </div>
              </div>
            </li>
            <li className='py-3 sm:py-4'>
              <div>
                <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-800 flex'>
                  Already Holding Crypto?
                </h5>
                <div className='flex flex-wrap justify-center'>
                  <div className='md:w-1/2 w-full flex justify-center'>
                    <CTA_Card1 />
                  </div>
                  <div className='md:w-1/2 w-full flex justify-center'>
                    <CTA_Card2 />
                  </div>
                </div>
              </div>
            </li>
            <li className='py-3 sm:py-4'>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ac cursus felis. Ut quis nisl nibh. Aenean tristique sodales
                erat, vitae pellentesque leo placerat et. Vivamus ut feugiat
                lorem, non euismod orci. Aliquam mattis accumsan est, nec
                posuere nulla imperdiet vitae.{" "}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutCard
