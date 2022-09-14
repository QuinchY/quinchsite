import Link from 'next/link'
import React, { useState } from 'react'

const MainNavigation = () => {
	const [menuToggle, setMenuToggle] = useState(false);
	const toggleMenu = () => {
		menuToggle ? setMenuToggle(false) : setMenuToggle(true);
	}
	return (
		<div className='relative'>
			<nav className='flex relative z-10 justify-between px-4 lg:flex lg:justify-between lg:items-center lg:px-32'>
				<div className='py-8 px-3 lg:px-7'>
					<Link href="/">
						<h1 className='font-bebas italic text-3xl font-black cursor-pointer'>Logo</h1>
					</Link>
				</div>
				<ul className='hidden lg:flex lg:justify-evenly'>
					<li className='px-14'><Link href="/"><a className='font-bebas font-thin text-xl tracking-widest leading-9'>Home</a></Link></li>
					<li className='px-14'><Link href="/about"><a className='font-bebas font-thin text-xl tracking-widest leading-9'>About</a></Link></li>
					<li className='px-14'><Link href="/projects"><a className='font-bebas font-thin text-xl tracking-widest leading-9'>Projects</a></Link></li>
				</ul>
				<div className='hidden py-8 px-7 lg:flex'>
					<button className='bg-black w-10 h-10 rounded-lg'></button>
				</div>
				<button className='flex lg:hidden' onClick={toggleMenu}>
					<div className='flex flex-col-reverse justify-between my-8 mx-3 h-8 w-8 cursor-pointer'>
						<div className={menuToggle ? 'h-1 bg-black rounded-2xl mt-1 -translate-x-5 opacity-0 transition ease-in-out ' : 'h-1 bg-black rounded-2xl mt-1 -rotate-0 transition ease-in-out'} id='linetop'></div>
						<div className={menuToggle ? 'h-1 bg-black rounded-2xl mt-1 -translate-x-5 opacity-0 transition ease-in-out' : 'h-1 bg-black rounded-2xl mt-1 -rotate-0 transition ease-in-out'}></div>
						<div className={menuToggle ? 'h-1 bg-black rounded-2xl mt-1 -translate-x-5 opacity-0 transition ease-in-out' : 'h-1 bg-black rounded-2xl mt-1 -rotate-0 transition ease-in-out'}></div>
					</div>
				</button>
			</nav>
			<div className={menuToggle ? 'flex justify-center fixed bg-zinc-800 w-full h-screen top-0 z-10 translate-x-0 transition ease-in-out duration-1000' : 'flex justify-center fixed bg-zinc-800 w-full h-screen top-0 z-10 translate-x-full transition ease-in-out duration-1000'}>
				<button className='absolute bg-white h-10 w-10 rounded-full top-8 right-10' onClick={toggleMenu}></button>
				<ul className={menuToggle ? 'flex flex-col justify-center' : 'hidden'}>
					<li className='px-14'><Link href="/"><a className='font-bebas font-thin text-white text-xl tracking-widest leading-9'>Home</a></Link></li>
					<li className='px-14'><Link href="/about"><a className='font-bebas font-thin text-white text-xl tracking-widest leading-9'>About</a></Link></li>
					<li className='px-14'><Link href="/projects"><a className='font-bebas font-thin text-white text-xl tracking-widest leading-9'>Projects</a></Link></li>
				</ul>
			</div>
		</div>
	)
}

export default MainNavigation