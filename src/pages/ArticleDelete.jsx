import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteArticle } from '../features/articleSlice'
import { useParams, useNavigate } from 'react-router-dom'
import { AiFillDelete } from 'react-icons/ai'

function ArticleDelete() {
	let { articleId } = useParams()

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { isError, isSuccess, message } = useSelector(
		(state) => state.article
	)

	useEffect(() => {
		if (isError) {
			console.log(message)
		}
	}, [isError, message, isSuccess, navigate])

	const handleClick = () => {
		dispatch(deleteArticle(articleId))
		navigate('/')
	}

	return (
		<div className="danger-container">
			<h1>Are you sure you want to delete this article?</h1>
			<button onClick={handleClick}>
				Delete <AiFillDelete />
			</button>
		</div>
	)
}

export default ArticleDelete
