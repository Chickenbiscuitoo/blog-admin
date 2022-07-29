import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'

function Header() {
	return (
		<header className="header">
			<div className="logo">
				<Link to="/">Blog</Link>
			</div>
			<Link to={'article/create'}>
				<AiOutlinePlus />
			</Link>
		</header>
	)
}

export default Header
