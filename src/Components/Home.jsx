import React from 'react'
import vg from '../Assets/vg.webp'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai"
const Home = () => {
  return (
    <>1

      <div className="home" id='home' >
        <main>
          <h1>GyanCoder</h1>
          <p>Solution To All Your Problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos unde, itaque impedit eaque architecto odio suscipit, maxime temporibus aliquam aliquid sint, repellendus vitae? Ratione odio maxime aliquam dolores. Aperiam, id! Lorem, ipsum.
          </p>
        </div>


      </div>

      <div className="home3" id='about' >
        <div>
        <h1>Who We Are ?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quasi ea vitae dolore debitis exercitationem laborum atque eos, ipsam ab praesentium, omnis quo officiis eligendi et ipsa. Repellendus sequi dicta earum nemo? Distinctio, in reprehenderit? Obcaecati inventore consectetur harum expedita. Dicta ex nostrum eveniet eligendi impedit dolore, placeat quae libero culpa nesciunt asperiores incidunt quidem. Nesciunt quidem tempora, repellat similique neque a ipsum, id magni suscipit ab rem illum, quasi velit est ipsa harum. Quis inventore, veniam labore cupiditate voluptates magni autem voluptatum architecto mollitia maiores quaerat accusantium laboriosam odio, temporibus non beatae et eius dolorum facere impedit incidunt?
        </p>
        </div>
      </div>
      <div className="home4" id='brands'  >
        <div>
          <h1>Brands</h1>
          <article>
            <div style={
              {animationDelay: "0.3s",}
            } >
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>


            <div style={
              {animationDelay: "0.5s",}
            } >
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>


            <div style={
              {animationDelay: "0.7s",}
            } >
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>


            <div style={
              {animationDelay: "0.9s",}
            } >
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>



          </article>
        </div>
      </div>
    </>
  )
}

export default Home