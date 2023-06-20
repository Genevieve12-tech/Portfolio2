/*import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "./portfolio.css";
import IMGI from '../../assets/portfolio1.jpeg'
import IMGI1 from '../../assets/images.jpeg'
import IMGI2 from '../../assets/portfolio2.jpeg'
import IMGI3 from '../../assets/portfolio3.jpeg'
import IMGI4 from '../../assets/portfolio4.jpeg'
import IMGI5 from "../../assets/portfolio6.jpeg";


const Portfolio = () => {
   const [data, setData] = useState([]);

   useEffect(() =>{
    axios
    .get("https://teal-smiling-elk.cyclic.app/api/portfolio") 
    .then(response=>{
      const formattedData = response.data.data.map(item => ({
        id: item._id
        image: item.image,
        title: item.title,
        github: item.github,
        demo: item.demo
       }));
       setData(formattedData);
    }).catch(error =>{
      console.error('Error fetching portfolio dataa:', error);
    });
   }, [])

    return (
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Porfolio</h2>

        <div className="container portfolio__container">
          {data.map(({ id, image, title, github, demo}) =>)
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMGI} alt="porfolio" />
              <h3>This is a portfolio item title</h3>
              <div className=".portfolio__item-cta">
                <a href="https://github.com" className="btn">
                  Github
                </a>
                <a
                  href="https://dribble.com/Alien_pixels"
                  className="btn btn-primary"
                >
          }

                  Live Demo
                </a>
              </div>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMGI1} alt="porfolio" />
              <h3>This is a portfolio item title</h3>
              <div className=".portfolio__item-cta">
                <a href="https://github.com" className="btn">
                  Github
                </a>
                <a
                  href="https://dribble.com/Alien_pixels"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMGI2} alt="porfolio" />
              <h3>This is a portfolio item title</h3>
              <div className=".portfolio__item-cta">
                <a href="https://github.com" className="btn">
                  Github
                </a>
                <a
                  href="https://dribble.com/Alien_pixels"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMGI3} alt="porfolio" />
              <h3>This is a portfolio item title</h3>
              <div className=".portfolio__item-cta">
                <a href="https://github.com" className="btn">
                  Github
                </a>
                <a
                  href="https://dribble.com/Alien_pixels"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMGI4} alt="porfolio" />
              <h3>This is a portfolio item title</h3>
              <div className=".portfolio__item-cta">
                <a href="https://github.com" className="btn">
                  Github
                </a>
                <a
                  href="https://dribble.com/Alien_pixels"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMGI5} alt="porfolio" />
              <h3>This is a portfolio item title</h3>
              <div className=".portfolio__item-cta">
                <a href="https://github.com" className="btn">
                  Github
                </a>
                <a
                  href="https://dribble.com/Alien_pixels"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    );
}
export default Portfolio