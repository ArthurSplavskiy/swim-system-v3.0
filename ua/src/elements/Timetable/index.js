import React from 'react'

import { timetableData } from '../../data/timetableData'
import Button from '../Button'

import icon from '../../img/icons/swim-faq.svg'
import './index.scss'



const Timetable = () => {

    return (
        <div className="timetable">
            {
                timetableData.map((day, index)=> {

                    const template = day.map((item, idx) => (
                        <div className="timetable__item" key={idx}>
                            <div className="icon-column">
                                <div>
                                    <img src={icon} alt="Swim System" />
                                    <time className="mobile">{item.time}</time>
                                </div>
                                <span className="mobile">{item.coach}</span>
                            </div>
                            <div className="time-column desktop">
                                <time>{item.time}</time>
                            </div>
                            <div className="center-column">
                                <div>
                                    <span className="location-name">{item.locationName}</span>
                                    <span className="location-address">{item.locationAddress}</span>
                                </div>
                            </div>
                            <div className="coach-column desktop">
                                <span>{item.coach}</span>
                            </div>
                            <div className="right-column">
                                <Button text={item.statusDescription} status={!item.status} closeModal="timetable" openModal="form" />
                            </div>
                        </div>
                    ))

                    switch (index) {
                        case 0: {
                            return (
                                <div className="timetable__block" key={index}>
                                    <div className="timetable__head">
                                        <span>ПОНЕДІЛОК</span>
                                    </div>
                                    {template}
                                </div>
                            )
                        }
                        case 1: {
                            return (
                                <div className="timetable__block" key={index}>
                                    <div className="timetable__head">
                                        <span>Вівторок</span>
                                    </div>
                                    {template}
                                </div>
                            )
                        }
                        case 2: {
                            return (
                                <div className="timetable__block" key={index}>
                                    <div className="timetable__head">
                                        <span>Середа</span>
                                    </div>
                                    {template}
                                </div>
                            )
                        }
                        case 3: {
                            return (
                                <div className="timetable__block" key={index}>
                                    <div className="timetable__head">
                                        <span>Четвер</span>
                                    </div>
                                    {template}
                                </div>
                            )
                        }
                        case 4: {
                            return (
                                <div className="timetable__block" key={index}>
                                    <div className="timetable__head">
                                        <span>п’ятниця</span>
                                    </div>
                                    
                                    {template}
                                </div>
                            )
                        }
                        case 5: {
                            return (
                                <div className="timetable__block" key={index}>
                                    <div className="timetable__head">
                                        <span>субота</span>
                                    </div>
                                    {template}
                                </div>
                            )
                        }
                        
                        
                        default: {
                            return (
                                <div>Місць немає</div>
                            )
                        }
                    }
                })
            }
        </div>
    )
}



export default Timetable
