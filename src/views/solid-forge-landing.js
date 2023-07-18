import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SecondaryButton from '../components/secondary-button'
import Footer from '../components/footer'
import './solid-forge-landing.css'

const SolidForgeLanding = (props) => {
  return (
    <div className="solid-forge-landing-container">
      <Helmet>
        <title>Blocking</title>
        <meta property="og:title" content="Blocking" />
      </Helmet>
      <div className="solid-forge-landing-hero">
        <div className="solid-forge-landing-bg"></div>
        <Header></Header>
        <div className="solid-forge-landing-hero1">
          <h1 className="solid-forge-landing-text">
            <span>Think outside the box</span>
            <br></br>
          </h1>
          <div className="solid-forge-landing-bg1"></div>
        </div>
      </div>
      <div className="solid-forge-landing-post-details">
        <div className="solid-forge-landing-container01">
          <svg
            viewBox="0 0 1170.2857142857142 1024"
            className="solid-forge-landing-icon"
          >
            <path d="M585.143 292.571h-219.429v219.429h219.429v-219.429zM658.286 658.286v73.143h-365.714v-73.143h365.714zM658.286 219.429v365.714h-365.714v-365.714h365.714zM1024 658.286v73.143h-292.571v-73.143h292.571zM1024 512v73.143h-292.571v-73.143h292.571zM1024 365.714v73.143h-292.571v-73.143h292.571zM1024 219.429v73.143h-292.571v-73.143h292.571zM146.286 768v-548.571h-73.143v548.571c0 20 16.571 36.571 36.571 36.571s36.571-16.571 36.571-36.571zM1097.143 768v-621.714h-877.714v621.714c0 12.571-2.286 25.143-6.286 36.571h847.429c20 0 36.571-16.571 36.571-36.571zM1170.286 73.143v694.857c0 60.571-49.143 109.714-109.714 109.714h-950.857c-60.571 0-109.714-49.143-109.714-109.714v-621.714h146.286v-73.143h1024z"></path>
          </svg>
        </div>
        <span className="solid-forge-landing-text03 TextXL">
          Communicate in Virtual Space the same way you do in Physical Space
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="solid-forge-landing-text04">
          <span>Flexibility of all Diemensions</span>
          <br></br>
        </span>
        <span className="solid-forge-landing-text07">
          <span>
            The Solid Forge has a vision to create tools and experiences that
            assist you in sharing your ideas with the world. 
          </span>
          <br></br>
        </span>
      </div>
      <div className="solid-forge-landing-section1">
        <div className="solid-forge-landing-container02">
          <div className="solid-forge-landing-container03">
            <h6 className="solid-forge-landing-text10">A fresh Experience</h6>
            <h3 className="solid-forge-landing-text11 Healine">
              A familiar way to experience something new
            </h3>
            <span className="solid-forge-landing-text12">
              Our mission is to translate the in person experience with
              communicating with others in virtual space. A new medium is an
              opportunity to create otherwise impossible unique ideas.
            </span>
          </div>
          <div className="solid-forge-landing-cards-container">
            <div className="solid-forge-landing-card1">
              <div className="solid-forge-landing-container04">
                <svg
                  viewBox="0 0 1024 1024"
                  className="solid-forge-landing-icon02"
                >
                  <path d="M639.403 658.091l32 241.152-137.429-82.475c-13.269-7.851-29.995-8.363-43.904 0l-137.429 82.475 32.043-241.109c39.296 15.829 82.304 24.533 127.317 24.533s88.021-8.747 127.403-24.576zM654.165 554.283c-2.475 1.28-4.821 2.773-6.955 4.48-39.253 24.448-85.547 38.571-135.211 38.571-70.699 0-134.656-28.587-181.035-74.965s-74.965-110.336-74.965-181.035 28.587-134.656 74.965-181.035 110.336-74.965 181.035-74.965 134.656 28.587 181.035 74.965 74.965 110.336 74.965 181.035-28.587 134.656-74.965 181.035c-11.861 11.861-24.875 22.571-38.869 31.915zM304.64 612.48l-48.256 363.221c-3.115 23.339 13.312 44.8 36.693 47.915 9.984 1.323 19.669-0.939 27.563-5.717l191.36-114.816 191.403 114.816c20.224 12.117 46.421 5.589 58.539-14.635 5.205-8.661 6.955-18.389 5.717-27.563l-48.213-363.307c11.947-9.173 23.296-19.115 33.92-29.739 61.696-61.696 99.968-147.072 99.968-241.323s-38.272-179.627-99.968-241.365-147.115-99.968-241.365-99.968-179.627 38.272-241.365 99.968-99.968 147.115-99.968 241.365 38.272 179.627 99.968 241.365c10.667 10.667 22.016 20.608 33.963 29.781z"></path>
                </svg>
              </div>
              <h6 className="solid-forge-landing-text13 TextXL">Experience</h6>
              <span className="solid-forge-landing-text14">
                Utilizing over a decade of cutting edge technology experience. A
                reliable Ecosystem of tools work together. 
              </span>
            </div>
            <div className="solid-forge-landing-card2">
              <div className="solid-forge-landing-container05">
                <svg
                  viewBox="0 0 1097.142857142857 1024"
                  className="solid-forge-landing-icon04"
                >
                  <path d="M731.429 859.429c0 9.714-8.571 18.286-18.286 18.286h-548.571c-21.143 0-18.286-22.286-18.286-36.571v-329.143h-109.714c-20 0-36.571-16.571-36.571-36.571 0-8.571 2.857-17.143 8.571-23.429l182.857-219.429c6.857-8 17.143-12.571 28-12.571s21.143 4.571 28 12.571l182.857 219.429c5.714 6.286 8.571 14.857 8.571 23.429 0 20-16.571 36.571-36.571 36.571h-109.714v219.429h329.143c5.143 0 10.857 2.286 14.286 6.286l91.429 109.714c2.286 3.429 4 8 4 12zM1097.143 621.714c0 8.571-2.857 17.143-8.571 23.429l-182.857 219.429c-6.857 8-17.143 13.143-28 13.143s-21.143-5.143-28-13.143l-182.857-219.429c-5.714-6.286-8.571-14.857-8.571-23.429 0-20 16.571-36.571 36.571-36.571h109.714v-219.429h-329.143c-5.143 0-10.857-2.286-14.286-6.857l-91.429-109.714c-2.286-2.857-4-7.429-4-11.429 0-9.714 8.571-18.286 18.286-18.286h548.571c21.143 0 18.286 22.286 18.286 36.571v329.143h109.714c20 0 36.571 16.571 36.571 36.571z"></path>
                </svg>
              </div>
              <h6 className="solid-forge-landing-text15 TextXL">Integrity</h6>
              <span className="solid-forge-landing-text16">
                <span>
                  Rely on us to put our best foot forward. Both in our products
                  and customer service. Every exchange is an opportunity to
                  build trust. 
                </span>
                <br className="solid-forge-landing-text18"></br>
              </span>
            </div>
            <div className="solid-forge-landing-card3">
              <div className="solid-forge-landing-container06">
                <svg
                  viewBox="0 0 1024 1024"
                  className="solid-forge-landing-icon06"
                >
                  <path d="M636 938h-6q-92-24-158-90-38-38-65-103t-27-119q0-52 38-89t92-37 93 37 39 89q0 34 25 58t63 24 64-24 26-58q0-120-91-206t-219-86q-92 0-168 47t-114 125q-24 50-24 120 0 80 28 154 6 20-14 26t-26-12q-32-82-32-168 0-78 30-138 42-90 129-144t191-54q146 0 249 99t103 237q0 52-39 88t-93 36-92-36-38-88q0-34-26-59t-64-25-63 25-25 59q0 112 80 192 56 56 140 78 18 2 14 26-4 16-20 16zM530 626q0 74 55 128t137 54q4 0 18-2t23-2 18 3 11 13q4 22-18 26-24 4-52 4-80 0-132-38-102-70-102-186 0-22 22-22 20 0 20 22zM416 930q-8 0-14-6-54-54-86-114-46-80-46-184 0-94 71-162t171-68 171 68 71 162q0 20-22 20t-22-20q0-78-58-133t-140-55-140 55-58 133q0 96 38 164 26 46 80 104 16 14 0 30-6 6-16 6zM150 414q-22 0-22-20 0-4 4-12 64-92 160-140 100-52 220-52t220 52q98 48 160 138 4 8 4 12 0 14-16 20t-24-8q-60-82-144-124-92-46-200-47t-200 47q-90 46-146 126-6 8-16 8zM760 190q-8 0-10-2-118-60-238-60-130 0-238 60-10 6-20 0t-10-18q0-14 10-20 116-64 258-64 130 0 258 64 18 10 8 28-8 12-18 12z"></path>
                </svg>
              </div>
              <h6 className="solid-forge-landing-text19 TextXL">Curiosity</h6>
              <span className="solid-forge-landing-text20">
                New things are created when there is not enough information.
                Kindle your curiosity from a single page to a whole book. 
              </span>
            </div>
          </div>
          <div className="solid-forge-landing-work-with-us">
            <div className="solid-forge-landing-container07">
              <div className="solid-forge-landing-container08">
                <svg
                  viewBox="0 0 1024 1024"
                  className="solid-forge-landing-icon08"
                >
                  <path d="M384 554q64 0 140 18t139 60 63 94v128h-684v-128q0-52 63-94t139-60 140-18zM640 512q-26 0-56-10 56-66 56-160 0-38-16-86t-40-76q30-10 56-10 70 0 120 51t50 121-50 120-120 50zM214 342q0-70 50-121t120-51 120 51 50 121-50 120-120 50-120-50-50-120zM712 560q106 16 188 59t82 107v128h-172v-128q0-98-98-166z"></path>
                </svg>
              </div>
              <h3 className="solid-forge-landing-text21 Healine">
                Some Information
              </h3>
              <span className="solid-forge-landing-text22">
                <span>
                  Stuck on how to use a product or need some inspiration? Check
                  out our help center that you can find what you are looking for
                  or get some inspiration from others.  
                </span>
                <br></br>
              </span>
              <span className="solid-forge-landing-text25">
                Link to News and Publishments
              </span>
            </div>
            <div className="solid-forge-landing-container09">
              <div className="solid-forge-landing-container10">
                <img
                  alt="image"
                  src="/blue_wave.svg"
                  className="solid-forge-landing-image"
                />
              </div>
              <div className="solid-forge-landing-container11">
                <h4 className="solid-forge-landing-text26 Healine">
                  <span className="solid-forge-landing-text27">
                    Solid Community
                  </span>
                  <br></br>
                </h4>
                <span className="solid-forge-landing-text29">
                  <span>
                    Not a single person is responsible for all good ideas in the
                    world. Add your two cents and build your own community
                    focused on topics, ideas, or an inside joke. 
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/white-vector.svg"
          className="solid-forge-landing-image1"
        />
      </div>
      <div className="solid-forge-landing-section3">
        <div className="solid-forge-landing-container12">
          <h6 className="solid-forge-landing-text32 TextSM">Reach out to Us</h6>
          <h3 className="solid-forge-landing-text33 Healine">
            Over Communicate Lower Frustration
          </h3>
          <div className="solid-forge-landing-contact">
            <span className="solid-forge-landing-text34 TextXL">
              Tell us what you want us to hear. This is one direct way for you
              to share your thoughts on a feature, product, or message.
            </span>
            <div className="solid-forge-landing-form">
              <h1 className="solid-forge-landing-text35">
                Want to work with us?
              </h1>
              <span className="solid-forge-landing-text36 TextXL">
                By Completing this form you consent to your contacting you about
                potential current or future services. 
              </span>
              <span className="solid-forge-landing-text37 TextXS">
                FULL NAME
              </span>
              <input
                type="text"
                placeholder="Full Name"
                className="solid-forge-landing-textinput TextSM input"
              />
              <span className="solid-forge-landing-text38 TextXS">EMAIL</span>
              <input
                type="text"
                placeholder="Email"
                className="solid-forge-landing-textinput1 TextSM input"
              />
              <span className="solid-forge-landing-text39 TextXS">MESSAGE</span>
              <textarea
                cols="80"
                rows="4"
                disabled="true"
                placeholder="Type a message"
                className="solid-forge-landing-textarea TextSM textarea"
              ></textarea>
              <div className="solid-forge-landing-container13">
                <SecondaryButton
                  button="Send message"
                  rootClassName="secondary-button-root-class-name"
                ></SecondaryButton>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/gray-vector.svg"
          className="solid-forge-landing-image2"
        />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default SolidForgeLanding
