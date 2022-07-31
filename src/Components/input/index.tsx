import { useContext } from "react"
import { PreviewContext } from "../../Contexts/preview"

const Input = () => {

    const { input } = useContext(PreviewContext)

    return (
        <div className='w-full h-full mx-2'>
            <div className='my-2'>Input Text</div>
            <textarea onChange={(e) => input(e.target.value)} className='prose w-full h-full outline-none text-black p-2 bg-[#475165] resize-none' />
        </div>
    )
}

export default Input