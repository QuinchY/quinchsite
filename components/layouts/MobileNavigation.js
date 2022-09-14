import React, { useState, useEffect } from 'react'

const MobileNavigation = () => {
	const [menuToggle, setMenuToggle] = useState(false);
	const toggleMenu = () => {
		menuToggle ? setMenuToggle(false) : setMenuToggle(true);
		console.log(menuToggle)
	}
	return (
		<button className='flex lg:hidden' onClick={toggleMenu}>
			<div className='flex flex-col-reverse justify-between my-8 mx-3 h-8 w-8 cursor-pointer'>
				<div className={menuToggle ? 'h-1 bg-black rounded-2xl mt-1 -translate-y-3 -rotate-45 transition ease-in-out' : 'h-1 bg-black rounded-2xl mt-1 -rotate-0 transition ease-in-out'} id='linetop'></div>
				<div className={menuToggle ? 'h-1 bg-black rounded-2xl mt-1 -translate-x-5 opacity-0 transition ease-in-out' : 'h-1 bg-black rounded-2xl mt-1 -rotate-0 transition ease-in-out'}></div>
				<div className={menuToggle ? 'h-1 bg-black rounded-2xl mt-1 translate-y-3 rotate-45 transition ease-in-out' : 'h-1 bg-black rounded-2xl mt-1 -rotate-0 transition ease-in-out'}></div>
			</div>
		</button>
	)
}

export default MobileNavigation