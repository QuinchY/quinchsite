import Link from 'next/link'
import styles from '../../styles/MainNavigation.module.css'

const MainNavigation = () => {
  return (
		<nav className='flex justify-between px-4 lg:flex lg:justify-between lg:items-center lg:px-32'>
			<div className='py-8 px-7'>
				<Link href="/">
					<h1 className={styles.navlogo}>Logo</h1>
				</Link>
			</div>
			<ul className='lg:flex justify-evenly hidden'>
				<li className='px-14'><Link href="/"><a className={styles.navlinks}>Home</a></Link></li>
				<li className='px-14'><Link href="/"><a className={styles.navlinks}>About</a></Link></li>
				<li className='px-14'><Link href="/"><a className={styles.navlinks}>Projects</a></Link></li>
			</ul>
			<div className='hidden lg:flex py-8 px-7'>
				<button className='bg-black w-10 h-10 rounded-lg'></button>
			</div>
			<div className={styles.hamburgermenu}>
				<div className={styles.bartop}></div>
				<div className={styles.barmiddle}></div>
				<div className={styles.barbottom}></div>
			</div>
		</nav>
	)
}

export default MainNavigation