import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
               className="home__image"
               src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_2x._CB667161802_.jpg" alt="banner" />
               <div className="category__item">
                  <li class="nav-item">
                    <a class="item" href="#scrollspyHeading1">Breakfast</a>
                  </li>
                  <li class="nav-item">
                    <a class="item" href="#scrollspyHeading2">Fried</a>
                  </li>
                  <li class="nav-item">
                    <a class="item" href="#scrollspyHeading3">Rice</a>
                  </li>
                  <li class="nav-item">
                    <a class="item" href="#scrollspyHeading4">Juice</a>
                  </li>
                  <li class="nav-item">
                    <a class="item" href="#scrollspyHeading5">Wakye</a>
                  </li>
                  <li class="nav-item">
                    <a class="item" href="#scrollspyHeading6">Banku</a>
                  </li>
                  <li class="nav-item">
                    <a class="item" href="#scrollspyHeading3">Rice</a>
                  </li>
                  <li class="nav-item">
                    <a class="item" href="#scrollspyHeading4">Juice</a>
                  </li>
               </div>
               <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
               <h5 id="scrollspyHeading1">Breakfast</h5>
                <div className="home__row">
                  <Product
                    id="122332"
                    title="Continental"
                    price={11.98}
                    rating={5}
                    image="https://d3gy1em549lxx2.cloudfront.net/f6520260-1318-4146-89b8-9e334db9d913.JPG" />
                  <Product
                    id="122332"
                    title="Pan Asian"
                    price={11.98}
                    rating={5}
                    image="https://d3gy1em549lxx2.cloudfront.net/ec35dcad-93bf-4934-aa58-819260bde78b.jpg" />
                    <Product
                       id="122332"
                       title="Veg"
                       price={11.98}
                       rating={5}
                       image="https://d3gy1em549lxx2.cloudfront.net/08e66404-6af1-4acb-a81e-f4543c12ff38.jpg" />
                </div>
                <h5 id="scrollspyHeading2">Rice</h5>
                <div className="home__row">
                  <Product
                    id="122332"
                    title="Continental"
                    price={11.98}
                    rating={5}
                    image="https://d3gy1em549lxx2.cloudfront.net/f6520260-1318-4146-89b8-9e334db9d913.JPG" />
                  <Product
                    id="122332"
                    title="Pan Asian"
                    price={11.98}
                    rating={5}
                    image="https://d3gy1em549lxx2.cloudfront.net/ec35dcad-93bf-4934-aa58-819260bde78b.jpg" />
                    <Product
                       id="122332"
                       title="Veg"
                       price={11.98}
                       rating={5}
                       image="https://d3gy1em549lxx2.cloudfront.net/08e66404-6af1-4acb-a81e-f4543c12ff38.jpg" />
                </div>
                <h5 id="scrollspyHeading3">Banku and Tillapia</h5>
                <div className="home__row">
                  <Product
                    id="122332"
                    title="Continental"
                    price={11.98}
                    rating={5}
                    image="https://d3gy1em549lxx2.cloudfront.net/f6520260-1318-4146-89b8-9e334db9d913.JPG" />
                  <Product
                    id="122332"
                    title="Pan Asian"
                    price={11.98}
                    rating={5}
                    image="https://d3gy1em549lxx2.cloudfront.net/ec35dcad-93bf-4934-aa58-819260bde78b.jpg" />
                    <Product
                       id="122332"
                       title="Veg"
                       price={11.98}
                       rating={5}
                       image="https://d3gy1em549lxx2.cloudfront.net/08e66404-6af1-4acb-a81e-f4543c12ff38.jpg" />
                </div>
                </div>
              </div>
                
    )
}

export default Home
