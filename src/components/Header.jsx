import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { useParams } from 'react-router-dom'

function Header() {
	let { articleId } = useParams()

	return (
		<header className="header">
			<div className="logo">
				<Link to="/">Blog</Link>
			</div>
			<Link to={`/article/create/${articleId}`}>
				<AiOutlinePlus />
			</Link>
		</header>
	)
}

export default Header
