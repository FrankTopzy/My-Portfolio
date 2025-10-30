//import React from 'react'

function Title({title, align, pad}: {title: string; align?: string; pad?: number}) {
  return (
    <div>
      <h1 className={`text-center sm:text-${align} text-[32px] uppercase font-bold pb-3`}>{title}</h1>
    </div>
  )
}

export default Title