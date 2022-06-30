import Head from 'next/head'
import { useState } from 'react'
import {useTheme} from 'next-themes';
import { Switch } from '@headlessui/react'
import Link from 'next/link'

const Index = (props: any) => {
    const [enabled, setEnabled] = useState(false)
    const {systemTheme , theme, setTheme} = useTheme ();
    const currentTheme = theme === "system" ? systemTheme : theme;
    return (
        <div className='flex flex-col gap-5 bg-gray-100 dark:bg-gray-900 h-screen w-screen overflow-x-hidden pb-20'>
            <Head>
                <title>Cats API</title>
                <meta name="description" content="Cat Breeds Directory" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='flex flex-row justify-between items-center bg-white dark:bg-gray-800 shadow-md px-5 md:px-20 py-3 max-h-fit'>
                <Link href="/">
                    <h1 className='text-lg text-layzr dark:text-white uppercase font-bold cursor-pointer'>Cat Breeds</h1>
                </Link>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row justify-end items-center px-8'>
                        <ul className='inline-flex gap-x-6'>
                            <li>
                                <Link href="/">
                                    <a className='dark:text-white text-gray-900'>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/breeds">
                                    <a className='dark:text-white text-gray-900'>Cat Breeds</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Switch
                        checked={enabled}
                        onChange={(value: any) => {
                            setEnabled(value)
                            if(currentTheme ==="dark"){
                            setTheme('light')
                            } else {
                            setTheme('dark')
                            }
                        }}
                        className={`${
                            (!enabled || currentTheme !=="dark") ? 'bg-indigo-800' : 'bg-gray-200'
                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                        <span className="sr-only">Enable Dark Mode</span>
                        <span
                            className={`${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white`}
                        />
                    </Switch>
                </div>
            </div>
            <div className='px-5 md:px-20'>
                {props?.children}
            </div>
        </div>
    )
};

export default Index;
