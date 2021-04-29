import { message } from "antd"


export const copytoClipboard=(text)=>{
    navigator.clipboard.writeText(text)
    message.success("Reference Id Copied")
}