import type { NextPage } from 'next'
import instance from '../utils/instance'
import useSWR from 'swr'
import BreedCard from '../components/organisms/BreedCard/index'
import Layout from '../components/organisms/Layout/index'

const fetcher = (url: string) => instance.get(url).then(res => res.data)

const Home: NextPage = (props: any) => {
  const { data, error } = useSWR('breeds?limit=20', fetcher)
  return (
    <Layout>
      <div className='w-full grid md:grid-cols-4 grid-cols-1 gap-5'>
        {data && data.map((breed: any, i: any) => 
          <BreedCard key={i} breed={breed} url={`/breeds/${breed?.name}`} />
        )}
      </div>
    </Layout>
  )
}

export default Home
