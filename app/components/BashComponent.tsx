import React from "react"

const BashComponent = ({ text }: { text: string }) => {
  return <span className="p-1 px-3 inline mr-1 text-orange-400 bg-slate-800 text-[0.9em] rounded-[5px] bg-gray-200 w-fit ">{text}</span>
}

export default BashComponent
