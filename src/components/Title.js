import React from 'react'

const Title = ({ title, subtitle, para }) => {
  return (
    <div className={`flex flex-col items-center`}>
      <span className='text-[22px] font-medium text-primaryColor mb-[4px]'>{title}</span>
      <h3 className='text-[32px] font-bold mb-[20px]'>{subtitle}</h3>
      <p className='text-[22px] font-medium text-lightColor'>{para}</p>
    </div>
  )
}

export default Title
