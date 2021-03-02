import React from 'react'
import style from './modules/Header.module.css'
import Image from './Image'

import { Button } from 'antd';

import Logo from '../img/logo.svg'
import basket from '../img/basket.svg'

export default function Header() {
    return(
        <div className={style.container}>
            <div className={style.logo}>
                <Image image={Logo}/>
            </div>
            <div className={style.address}>
                <div className={style.Dist}>ASAP</div>
                <div className={style.to}>to</div>
                <div className={style.Dist}>
                    <span>ul. Bolshaya Dmitrovka,22 </span>
                </div>
            </div>
            <div className={style.buttons}>
                <div className={style.button}>
                    <Button>Sign In</Button>
                </div>
                <div className={style.button}>
                    <Button type="primary">Register</Button>
                </div>
                <div className={style.basket}>
                    <Image image={basket}/>
                </div>
            </div>
        </div>
    )
}