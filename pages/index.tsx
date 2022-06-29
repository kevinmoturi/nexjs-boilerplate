import type { NextPage } from 'next'
import instance from '../utils/instance'
import useSWR from 'swr'
import BreedCard from '../components/organisms/BreedCard/index'
import Layout from '../components/organisms/Layout/index'
import Image from 'next/image'

const fetcher = (url: string) => instance.get(url).then(res => res.data)

const Home: NextPage = (props: any) => {
  const { data, error } = useSWR('breeds?limit=20', fetcher)
  return (
    <Layout>
      <div className="carousel rounded-box w-full md:col-span-4 mb-10">
        <div className="relative h-96 carousel-item">
          <Image src="https://api.lorem.space/image/burger?w=400&h=300&hash=8B7BCDC2" alt="Burger" height={1000} width={1000} objectFit='cover' />
        </div> 
        <div className="relative h-96 carousel-item">
          <Image src="https://api.lorem.space/image/burger?w=400&h=300&hash=500B67FB" alt="Burger" height={1000} width={1000} objectFit='cover' />
        </div> 
        <div className="relative h-96 carousel-item">
          <Image src="https://api.lorem.space/image/burger?w=400&h=300&hash=A89D0DE6" alt="Burger" height={1000} width={1000} objectFit='cover' />
        </div> 
        <div className="relative h-96 carousel-item">
          <Image src="https://api.lorem.space/image/burger?w=400&h=300&hash=225E6693" alt="Burger" height={1000} width={1000} objectFit='cover' />
        </div> 
        <div className="relative h-96 carousel-item">
          <Image src="https://api.lorem.space/image/burger?w=400&h=300&hash=9D9539E7" alt="Burger" height={1000} width={1000} objectFit='cover' />
        </div> 
        <div className="relative h-96 carousel-item">
          <Image src="https://api.lorem.space/image/burger?w=400&h=300&hash=BDC01094" alt="Burger" height={1000} width={1000} objectFit='cover' />
        </div> 
        <div className="relative h-96 carousel-item">
          <Image src="https://api.lorem.space/image/burger?w=400&h=300&hash=7F5AE56A" alt="Burger" height={1000} width={1000} objectFit='cover' />
        </div>
      </div>
      {data && data.map((breed: any, i: any) => 
        <BreedCard key={i} breed={breed} url={`/react-query/${breed?.id}`} />
      )}
    </Layout>
  )
}

export default Home
