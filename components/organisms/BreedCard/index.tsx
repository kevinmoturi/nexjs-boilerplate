import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Index = (props: any) => {
  return (
    <Link href={props?.url}>
      <div className='shadow bg-white dark:bg-gray-800 rounded cursor-pointer'>
          <div className='relative w-full h-40 rounded'>
              <Image src={`${props.breed?.image?.url}`}  alt={props.breed?.name} layout='fill' objectFit='cover' />
          </div>
          <div className='p-4'>
              <h1 className='text-indigo-700 dark:text-white text-lg font-semibold capitalize'>{props.breed?.name}</h1>
          </div>
      </div>
    </Link>
  )
};

export default Index;
