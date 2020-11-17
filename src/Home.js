import React from "react";
import Product from "./Product";
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
                title="Xiaomi Mi Band 5 (Black)"
                price={35.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51F2t3z6v3L._AC_SL1000_.jpg"
            />
            <Product
                id="1"
                title="Xiaomi Mi Band 5 (Black)"
                price={35.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51F2t3z6v3L._AC_SL1000_.jpg"
            />
        </div>
        <div className="home__row">
            <Product
                id="1"
                title="Xiaomi Mi Band 5 (Black)"
                price={35.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51F2t3z6v3L._AC_SL1000_.jpg"
            />
            <Product
                id="1"
                title="Xiaomi Mi Band 5 (Black)"
                price={35.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51F2t3z6v3L._AC_SL1000_.jpg"
            />
            <Product
                id="1"
                title="Xiaomi Mi Band 5 (Black)"
                price={35.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51F2t3z6v3L._AC_SL1000_.jpg"
            />
        </div>
        <div className="home__row">
            <Product
                id="1"
                title="Xiaomi Mi Band 5 (Black)"
                price={35.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51F2t3z6v3L._AC_SL1000_.jpg"
            />
        </div>
    </div>
}