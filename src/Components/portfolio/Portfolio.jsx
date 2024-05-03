import React from "react";
import pso from "../../assets/pso.jpeg";
import './Portfolio.css'

const data=[
  {
    id:1,
    image: pso,
    title: "Particle Swarm Optimization",
    github:'https://github.com/sahithinasari/PSO',
    code: 'https://github.com/sahithinasari/PSO'
  },
  {
    id:2,
    image: pso,
    title: "Object Detection using PSO",
    github:'https://github.com/sahithinasari/PSO',
    code: 'https://github.com/sahithinasari/PSO'
  },
  {
    id:3,
    image: pso,
    title: "Fake Website Detection",
    github:'https://github.com/sahithinasari/PSO',
    code: 'https://github.com/sahithinasari/PSO'
  }
]
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
      {
        data.map(({id,image,title,github,demo})=>{
          return(
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
              <img src={image} alt='pso'></img>
              </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className="btn">
                    Github
                  </a>
                  <a
                    href={github}
                    className="btn btn-primary"
                  >
                    Code
                  </a>
                </div>
              </article>
          )
        })
         
      }

      </div>
      </section>
  );
}

export default Portfolio;
