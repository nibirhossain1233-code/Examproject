import React from 'react'

const Button = ({children,className,type="button"}) => {
  return <button type={type} className={`py-3.5 px-6.25 bg-primary-green rounded-[5px] font-lato font-semibold text-[16px] text-primary-white cursor-pointer ${className}`}>{children}</button>
}

export default Button