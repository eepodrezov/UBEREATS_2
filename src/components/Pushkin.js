import React from 'react'
import style from './modules/Pushkin.module.css'
import RestorantHeader from './RestorantHeader'
import Foodcards from './Foodcards'

import bgImage from '../img/pushkin/background.png'

import { Menu } from 'antd';



export default function Pushkin() {
    return (
        <div className={style.container}>
            <RestorantHeader
                bgImage={bgImage}
                title='Трактир «Пушкин»'
                info='₽₽₽ • Европейская'
                time='40 - 50 Min'
            />
            <Menu  className={style.menuItem} mode="horizontal" selectedKeys="page1" style={{'margin-left': '10%'}}>
                <Menu.Item className={style.menuItem} key="page1">
                    Закуски
                </Menu.Item>
                <Menu.Item className={style.menuItem} key="page2" >
                    Салаты
                </Menu.Item>
                <Menu.Item key="page3" >
                    Супы
                </Menu.Item>
                <Menu.Item key="page4" >
                    Горячие блюда
                </Menu.Item>
                <Menu.Item key="page5" >
                    Гарниры
                </Menu.Item>
                <Menu.Item key="page6" >
                    Десерты
                </Menu.Item>
            </Menu>
            <Foodcards />
        </div>
    )
}