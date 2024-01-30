import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/freshlyRestaurant.png'
import IMG2 from '../../assets/rocketLaunch.png'
import IMG3 from '../../assets/triPortfolio.png'
import IMG4 from '../../assets/filmSphere.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Freshly Restaurant',
    tag: ['HTML', 'CSS'],
    git: 'https://github.com/ThomGateau/Freshly-restaurant',
    demo: 'https://thomgateau.github.io/Freshly-restaurant/index.html'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Rocket Launch',
    tag: ['JavaScript', 'HTML', 'CSS'],
    git: 'https://github.com/ThomGateau/rocketAnimation',
    demo: 'https://thomgateau.github.io/rocketAnimation/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Trieur Portfolio',
    tag: ['JavaScript', 'HTML', 'CSS'],
    git: 'https://github.com/ThomGateau/portfolio-tri',
    demo: 'https://thomgateau.github.io/portfolio-tri/'
  }, 
  {
    id: 4,
    image: IMG4,
    title: 'FilmSphere',
    tag: ['PHP', 'MySql' ,'JavaScript', 'HTML', 'CSS'],
    git: 'https://gitlab.com/personnalproject3/FilmSphere',
    demo: ''
  }
]

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, tag, git, demo}) => {
            return (
              <article className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-tags">
                {tag.map((tagItem, index) => (
                  <div className="tag" key={index}>
                    {tagItem}
                  </div>
                ))}
                </div>
                <div className="portfolio_item-cta">
                  <a href={git} className="btn" target='_blank'>{git.includes("github")? "Github" : "Gitlab"}</a>
                  {
                    demo === '' ? '' : <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                  }
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio