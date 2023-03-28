import React from 'react'
import style from './style.module.css'

const BreadGrid = () => {

    return (
        <div>
            <div className={style.breadGrid}>
                <span className={style.oneSpan}><i>Exquisite</i></span>
                <span className={style.twoSpan}><i>Smooth</i></span>
                <span className={style.threeSpan}><i>Moist</i></span>
                <span className={style.fourSpan}><i>Garnished</i></span>

            </div>
        </div>
    )
}

export default BreadGrid;