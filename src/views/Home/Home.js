import React from 'react'
import "./Home.css"
import ImgSecure from "./secure.png"
import ImgLike from "./like.png"
import ImgBrain from "./brain.png"
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import { Link } from 'react-router-dom'

const FEATURES = [
  {
    featureImg: ImgSecure,
    featureText: "Not will be saved securly in your browser's local storage."
  },
  {
    featureImg: ImgBrain,
    featureText: "Use your Brain for thinking , not for remembeing things."
  },
  {
    featureImg: ImgLike,
    featureText: "Loved by 100+ users. Feedback are always welcome ! "
  }
]

function Home() {
  return (
    <div>
      <h1 className="text-center text-primary app-title"> 📘{""}Quick Note</h1>
      <p className="text-center text-grey">
        Your pocket friendly note taking App.{" "}
        <del>Never forget anything Again</del>{" "}
        <span className="highlight text-black tagline-heighlight ">Remember Everything !🧠</span>
      </p>
      <div>
        <h3 className='text-center text-black'>Why You Should Use Quick Note?</h3>


        <div className='features-container'>

          {
            FEATURES.map((feature) => {
              const { featureImg, featureText } = feature;
              return (
                <FeatureCard
                  featureImg={featureImg}
                  featureText={featureText} />
              );
            })
          }



        </div>

      </div>
      <div className="buttons-container">
        <Link to="/add">
          <button className=' btn btn-primary'>✍️Add Notes</button>
        </Link>
        <Link to="./show">
          <button className=' btn btn-secondary'>📖Show Notes</button>
        </Link>

      </div>



    </div>
  )
}

export default Home
