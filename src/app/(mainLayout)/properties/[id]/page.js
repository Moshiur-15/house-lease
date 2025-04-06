import React from 'react'

export default async function PropertiesDetails({params}) {
  const {id} =await params;
  console.log(id)
  return (
    <div>
      <h2 className='text-3xl'>
        Details
      </h2>
      Id: {id}
    </div>
  )
}
