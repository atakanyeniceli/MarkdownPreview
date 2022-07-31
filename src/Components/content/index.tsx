import React from 'react'
import Input from '../input'
import Preview from '../preview'

const Content = () => {
    return (
        <div className='text-white flex justify-around my-2 w-full h-4/5'>
            <Input />
            <Preview />
        </div>
    )
}

export default Content