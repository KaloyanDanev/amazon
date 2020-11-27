import React from "react";
import Product from "../product/Product";
import "./Home.css"

export default function Home() {
    return <div className="home">
        <img className="home__image"
             src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
             alt="homeBanner"
        />
        <div className="home__row">

            <Product
                id="1"
                title="New Apple iPhone 12 Pro Max (128GB, Graphite)"
                price={1399.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/71fVoqRC0wL._FMwebp__.jpg"
            />
            <Product
                id="2"
                title="Apple MacBook Air (13-inch Retina Display, 8GB RAM, 256GB SSD Storage) - Silver (Previous Model)"
                price={899.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71hfs3%2BFRCL._AC_SL1500_.jpg"
            />
        </div>
        <div className="home__row">
            <Product
                id="3"
                title="Xiaomi Mi Band 5 (Black)"
                price={35.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51F2t3z6v3L._AC_SL1000_.jpg"
            />
            <Product
                id="4"
                title="Cap Barbell Neoprene Coated Dumbbell Weights"
                price={39.33}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71jABWNAc%2BL._AC_SL1500_.jpg"
            />
            <Product
                id="5"
                title="AmazonBasics Hardside Carry-On Spinner Suitcase Luggage - Expandable with Wheels - 21 Inch, Black"
                price={56.53}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71s7HbyqzEL._AC_SL1500_.jpg"
            />
        </div>
        <div className="home__row">
            <Product
                id="6"
                title="Xiaomi Mi Band 5 (Black)"
                price={35.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51F2t3z6v3L._AC_SL1000_.jpg"
            />
        </div>
    </div>
}