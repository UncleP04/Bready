import React from 'react'
import style from './style.module.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const Location = () => {

    const locationIcon = {
        color: '#32814e',
        paddingRight: '3px'
    }

    return (
        <div className={style.locationBox}>
            <div className={style.location}>
               <div className={style.locationFeatures}>
                    <span>
                    <h1>Get in touch</h1>
                    <label htmlFor="">
                        <p><LocationOnIcon style={locationIcon} />166, Nduo-Eduo estate, Okon-eket.</p>
                        <p><AccessTimeFilledIcon style={locationIcon} />7:00am - 10:00pm(24/7)</p>
                        <p><CalendarMonthIcon style={locationIcon} />Sunday-Sunday</p>
                    </label>
                </span>
                   <span>
                    <ul>
                        <li>In store dining</li>
                        <li>Outdoor Dining</li>
                        <li>open seating</li>
                        <li>take out free wifi</li>
                        <li>delivery</li>
                        <li>ADA- accessible</li>
                    </ul>
                </span>
               </div>
            </div>
        </div>
    )
}

export default Location;