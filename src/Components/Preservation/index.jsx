import React from 'react'
import style from './style.module.css'

const BreadGrid = () => {

    return (
        <div>
            <div className={style.preservation}>
               <span>
                   <i>Keep, Store, Preserve</i>
               </span>
                <span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Aliquid aspernatur blanditiis
                        delectus dolore expedita fugiat laudantium quam sapiente ullam, ut.
                    </p>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Aliquid aspernatur blanditiis
                        delectus dolore expedita fugiat laudantium quam sapiente ullam, ut.
                    </p>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Aliquid aspernatur blanditiis.
                    </p>
                </span>
            </div>
        </div>
    )
}

export default BreadGrid;