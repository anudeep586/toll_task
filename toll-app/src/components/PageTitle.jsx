import React from 'react'

const PageTitle = ({children,...rest}) => {
  return (
    <div className='container'>
        <h1>{children}</h1>
    </div>
  )
}

export default PageTitle