import React, { useContext } from 'react'
import { PreviewContext } from '../../Contexts/preview'

const Preview = () => {

    const { outputText } = useContext(PreviewContext)
    return (
        <div className='w-full h-full mx-2'>
            <div className='my-2'>Preview MarkDown</div>
            <div id='preViewDiv' dangerouslySetInnerHTML={outputText} className='prose w-full h-full text-black p-2 bg-[#475165] text-start' />
        </div>
    )
}

export default Preview