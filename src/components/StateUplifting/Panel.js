import React, {useState} from 'react'

const Panel = ({title, children, isActive, onShow}) => {

    // const [isActive, setIsActive] = useState(false)    //step1 - remove


  return (

    <section className='panel'>
        <h3>{title}</h3>
        {isActive ? (
            <p>{children}</p>
        ): (
            <button onClick={onShow}>show </button>
        )}
    </section>

  )
}

export default Panel