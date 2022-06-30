import React from 'react'
import instance from '../../utils/instance';
import Layout from '../../components/organisms/Layout/index'
import { getCatBreeds } from '../../lib/cat-breeds.apis'
import BreedCard from '../../components/organisms/BreedCard/index'

const Index = ({ breeds } : { breeds: any }) => {
    return (
        <Layout>
            <div className='w-full grid md:grid-cols-4 grid-cols-1 gap-5'>
                {breeds && breeds.map((breed: any, i: any) => 
                    <BreedCard key={i} breed={breed} url={`/breeds/${breed?.name}`} />
                )}
            </div>
        </Layout>
    )
};

export async function getServerSideProps() {
    let data = await getCatBreeds();
    return {
        props: {
            breeds: data
        }
    }
}

export default Index;
