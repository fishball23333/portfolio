import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import school from '../../assets/school.png'

function Education() {
  let timelineElements = [
    {
    key:1,
    date: "September 2021 - April 2023",
    location: "Seneca College",
    major: "Ontario College Diploma in Computer Programming",
    description:"GPA 4.0, President's Honour List (Fall 2021, Winter 2022, Summer 2022, Fall 2022)",
    icon: "school"
    },{
    key: 2,
    date: "Summer 2015 - Winter 2019",
    location: "York University",
    major: "Bachelor of Science in Biomedical Science (Honours)",
    description:"",
    icon:"school"
    }
  ]
  return (
    <div id = "education" className='py-5'>
      <h1>Education</h1>
      <VerticalTimeline>
        {timelineElements.map(element=>{
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              icon = {<img src={school} alt = "asdf"/>}
            >
              <h3 className='vertical-timeline-element-title'>{element.major}</h3>
              <h4 className='vertical-timeline-element-subtitle'>{element.location}</h4>
              <p >{element.description}</p>
            </VerticalTimelineElement>

          )
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Education