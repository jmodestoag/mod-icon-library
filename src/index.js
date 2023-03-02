import React from 'react'

const Icon = (props) => {
  const { name } = props
  return (
    //   <i aria-hidden="true" className={`icon icon-${name}`} />
    <i aria-hidden='true' className={`${name}`} />
  )
}

export default Icon
