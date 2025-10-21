//import React from 'react'

function Title({title, align}: {title: string; align?: string}) {
  return (
    <div>
      <h1 className={`text-${align} text-[32px] uppercase font-bold`}>{title}</h1>
    </div>
  )
}

export default Title