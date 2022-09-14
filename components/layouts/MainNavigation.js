import Link from 'next/link'
import MobileNavigation from './MobileNavigation'

const MainNavigation = () => {
	return (
		<nav className='flex justify-between px-4 lg:flex lg:justify-between lg:items-center lg:px-32'>
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
			<MobileNavigation/>
		</nav>
	)
}

export default MainNavigation