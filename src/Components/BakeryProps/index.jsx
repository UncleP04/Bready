import React from 'react'
import style from './style.module.css'

const BakeryProps = (props) => {

    return (
        <div>
            <div className={style.bakeryGrid}>
                <div className={style.bakeryCard}>
                    <span className={style.bakeryImage}>
                        <img src={props.Image} alt={props.Alt} />
                    </span>
                    <span className={style.bakeryContent}>
                        <h3>{props.Header}</h3>
                        <p>{props.Paragraph}</p>
                        <small>{props.Price}</small>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BakeryProps;