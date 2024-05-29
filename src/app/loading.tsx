import Image from 'next/image'
import React from 'react'

function Loading() {
  return (
    <div className='flex grow w-full h-full min-h-[80vh] justify-center items-center'>
     <Image src="/loading.gif" width={400} height={400} alt='loading'/>
    </div>
  )
}

export default Loading
