import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import './experience.css'
import work from '../../assets/work.png'
let timelineElements = [
    {
    key:1,
    date: "2019 - 2023",
    location: "YorkTech Supply Ltd., Markham",
    title: "Counter Sales & Warehouse Associate ",
    description1:"Introducing products and making recommendations to customers in a good manner",
    description2:"Collaborate efficiently with co-workers in different departments",
    description3:"Checking quantities of items for shipping and receiving on a regular basis ",
    description4:"Registering regular inventory transactions and making customer invoices in the ERP system accurately",
    icon: "work"
    }
]
const Experience = () => {
  return (
    <div className='experience py-5' id = "experience">
        <h1>Work Experience</h1>
      <VerticalTimeline>
        {timelineElements.map(element =>{
            return (
                <VerticalTimelineElement
                key = {element.key}
                date={element.date}
                dateClassName = "date"
                icon = {<img src={work} alt = "asdf"/>}
                >
                <h4 className='vertical-timeline-element-subtitle'>{element.title}</h4>
                <h4 className='vertical-timeline-element-subtitle location'>{element.location}</h4>
                <p>{element.description1}</p>
                <p>{element.description2}</p>
                <p>{element.description3}</p>
                <p>{element.description4}</p>
      </VerticalTimelineElement>
            )
            })}
                  </VerticalTimeline>
    </div>
  )
}

export default Experience