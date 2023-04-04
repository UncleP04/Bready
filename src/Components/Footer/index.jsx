import React from 'react';
import style from './style.module.css';

const Footer = () => {

    return(
        <div>
            <div className={style.footer}>
                <span>
                    <h1>Bready</h1>
                </span>
                <span>
                    <ul>
                        <li>Foods</li>
                        <li>bakery</li>
                        <li>location</li>
                        <li>bake</li>
                    </ul>
                </span>
                <span>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                        Consequuntur facilis in maiores minima sapiente tempore!
                    </p>
                     <p>
                        Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                        Consequuntur facilis in maiores minima sapiente tempore!
                    </p>
                </span>

            </div>
        </div>
    )
}

export default Footer;