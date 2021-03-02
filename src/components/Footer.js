import React from 'react'
import style from './modules/Footer.module.css'
import Image from './Image'

import logo from '../img/white-logo.svg'
import langIcon from '../img/language.png'
import appStore from '../img/AppStore.png'
import GooglePlay from '../img/GooglePlay.png'

import { Divider } from 'antd';

export default function Footer() {
    return (
        <div className={style.back}>
            <div className={style.container}>
                <div className={style.logo}>
                    <Image image={logo} />
                </div>
                <Divider style={{ background: '#FFFFFF' }} />
                <div className={style.cols}>
                    <div className={style.col1}>
                        <select>
                            <option selected value="english">English</option>
                            <option value="russian">Russian</option>
                            <option value="ukraine">Ukraine</option>
                            <option value="parsultang">Parsultang</option>
                        </select>
                    </div>
                    <div className={style.col}>
                        <div className={style.row}>About UberEats</div>
                        <div className={style.row}>Become a Delivery Partner</div>
                        <div className={style.row}>Become a Restaurant Partner</div>
                    </div>
                    <div className={style.col}>
                        <div className={style.row}>See all cities</div>
                        <div className={style.row}>Pricing</div>
                        <div className={style.row}>Help</div>
                        <div className={style.row}>FAQs</div>
                    </div>
                </div>
                <Divider style={{ background: '#FFFFFF' }} />
                <div className={style.appStores}>
                    <Image image={appStore} />
                    <div style={{'margin-left':'20px'}}></div>
                    <Image image={GooglePlay}/>
                </div>
                    
                <Divider style={{ background: '#FFFFFF' }} />
                <div className={style.bottomText}>
                    <span>© 2017 Uber Technologies Inc.</span>
                    <span>Privacy</span>
                    <span>Terms</span>
                </div>

            </div>
        </div>
    )
}