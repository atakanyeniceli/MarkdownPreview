import { createContext, useEffect, useState } from "react";
import { marked } from "marked";

type TContext = {
    input: (inputText: string) => void,
    outputText: { __html: string }
}
const defaultContextValue: TContext = {
    input: (inputText: string) => { },
    outputText: { __html: '' }
}

export const PreviewContext = createContext<TContext>(defaultContextValue)

const PreviewProvider = ({ children }: { children: Array<JSX.Element> }) => {

    const [inputText, setInputText] = useState<string>('')
    const [outputText, SetOutputText] = useState<{ __html: string }>({ __html: '' })

    useEffect(() => {
        SetOutputText({ __html: marked(inputText) })
    }, [inputText])

    const input = (inputText: string) => {
        setInputText(inputText)
    }

    const values = { input, outputText }
    return <PreviewContext.Provider value={values}>{children}</PreviewContext.Provider>
}

export default PreviewProvider