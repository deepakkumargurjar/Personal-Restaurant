import React from 'react'
import data from '../restApi.json'

const Menu = () => {
  const dishes = data.data.dishes;

  return (
    <section className='menu' id='menu'>
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          <p>At Deepak Gurjar’s Restaurant, our popular dishes are loved for their rich flavors, perfect seasoning, and homely touch. Each recipe is made with fresh ingredients and cooked to perfection to bring out the true taste of tradition and quality</p>
        </div>

        <div className="dishes_container">
          {dishes.map((element) => (
            <div className="card" key={element.id}>
              <img src={element.image} alt={element.title} />
              <h3>{element.title}</h3>
              <button>{element.category}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
