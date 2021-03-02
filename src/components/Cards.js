import React from 'react'
import style from './modules/Cards.module.css'
import CardsConnent from './CardsContent'
import Search from './Search'

import {
    Link
  } from "react-router-dom";

import card1 from '../img/card1.png'
import card2 from '../img/card2.png'
import card3 from '../img/card3.png'
import card4 from '../img/card4.png'
import card5 from '../img/card5.png'
import card6 from '../img/card6.png'
import card7 from '../img/card7.png'
import card8 from '../img/card8.png'
import card9 from '../img/card9.png'
import pushkinLogo from '../img/pushkin/logo.png'

import { Space } from 'antd';


export default function Cards() {
    return (
        <div className={style.container}>
            <Search />
            <div className={style.title}>Moscow Restaurants</div>
            <Space direction="horizontal" wrap>
                <Link to='/'>
                    <CardsConnent cardImg={card1} title="Макдоналдс — Газетный" info="₽₽ • Бургеры" time="25 - 35 Min" />
                </Link>
                <Link to='/pushkin'>
                    <CardsConnent cardImg={pushkinLogo} title="Трактир «Пушкин»" info="₽₽₽ • Европейская" time="40 - 50 Min" />
                </Link>
                <Link to='/'>
                    <CardsConnent cardImg={card2} title="DimSum & Co — ЦДМ" info="₽ • Японская • Китайская • Азиатская" time="40 - 50 Min" />
                </Link>
                <Link to='/'>
                    <CardsConnent cardImg={card3} title="ДвижОК — Манежная" info="₽ • Американская • Европейская" time="35 - 45 Min" />
                </Link>
                <Link to='/'>
                    <CardsConnent cardImg={card4} title="НЯ — NHA" info="₽₽ • Вьетнамская" time="30 - 40 Min" />
                </Link>
                <Link to='/'>
                    <CardsConnent cardImg={card5} title="Точка Дзы — Цветной" info="₽₽ • Вьетнамская" time="40 - 50 Min" />
                </Link>
                <Link to='/'>
                    <CardsConnent cardImg={card6} title="Cinnabon" info="₽ • Выпечка • Десерты • Капкейки" time="25 - 35 Min" />
                </Link>
                <Link to='/'>
                    <CardsConnent cardImg={card7} title="PIZZELOVE" info="₽₽ • Пицца" time="15 - 25 Min" />
                </Link>
                <Link to='/'>
                    <CardsConnent cardImg={card8} title="Zю кафе — Тверская" info="₽₽ • Японская" time="25 - 35 Min" />
                </Link>
                <Link to='/'>
                    <CardsConnent cardImg={card9} title="Bar BQ Cafe — Манежная" info="₽₽₽ • Европейская" time="30 - 40 Min" />
                </Link>
                
            </Space>
        </div>
    )
}