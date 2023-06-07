import { useState } from 'react'

// const accTitle = 'To-do'
// const accContent = 'This is an unnecesary long description of this accordion item just so that we can have the description spanning more than one line'

function Accordion(/*{title, content}*/
) {
    const [isActive, setIsActive] = useState(false);
    const [accContent, setAccContent] = useState('Add the description of your task')
    const [accTitle, setAccTitle] = useState('Add the title of your task')

    return (
        <>
            <div>
               <div className='Accordion-item-heading'>
                <input className='Accordion-item-title' placeholder={accTitle} onChange={(event) => {setAccTitle(event.target.value)}}></input>
                <span className='Accordion-item-icon'  onClick={() => setIsActive(!isActive)}>{isActive ? '-' : '+'}</span>
               </div>
                {isActive && <input  className='Accordion-item-content' placeholder={accContent} onChange={(event) => {setAccContent(event.target.value)}}></input>}
            </div>
        </>
    )
}

export default Accordion