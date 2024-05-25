import React, {useState} from 'react'
import Panel from './Panel'
const Accordion = () => {

const [activeIndex, setActiveIndex] = useState(0)

  return (
    <><h2>Almaty, Kazakhstan</h2>
    <Panel isActive={activeIndex === 0} onShow={()=>setActiveIndex(0)} title="About">With a population of About2 million, Almaty is kazakhstan's largest city. </Panel>
    <Panel isActive={activeIndex === 1} onShow={()=>setActiveIndex(1)} title="Etymology">the name comes from spanish language. the kazak word for "aple" and is often known for its better truth. </Panel>
    </>
  )
}

export default Accordion