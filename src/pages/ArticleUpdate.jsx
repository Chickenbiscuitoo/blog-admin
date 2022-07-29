import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	getArticle,
	updateArticle,
	reset,
} from '../features/articleSlice'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

function ArticleForm() {
	let { articleId } = useParams()

	const [formData, setFormData] = useState({
		title: '',
		text: '',
	})

	const dispatch = useDispatch()
	const { selectedArticle, isLoading, isError, message } =
		useSelector((state) => state.article)

	useEffect(() => {
		if (isError) {
			console.log(message)
		}

		dispatch(getArticle(articleId))

		return () => {
			dispatch(reset())
		}
	}, [isError, message, dispatch, articleId])

	if (isLoading) {
		return <Spinner />
	}

	if (formData.title === '') {
		setFormData({
			title: selectedArticle.title,
			text: selectedArticle.text,
		})
	}

	const handleChange = (e) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const articleData = {
			title: formData.title,
			author: '62da8117517beb5b50565616',
			text: formData.text,
		}

		dispatch(updateArticle(articleData, articleId))
	}

	if (isLoading) {
		return <Spinner />
	}

	return (
		<div>
			<section className="form">
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<input
							type="text"
							className="form-controll"
							id="title"
							name="title"
							value={formData.title}
							placeholder="Article Title"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<textarea
							className="form-controll"
							id="text"
							name="text"
							value={formData.text}
							placeholder="Article Text"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<button
							type="submit"
							className="btn btn-block"
						>
							Submit
						</button>
					</div>
				</form>
			</section>
		</div>
	)
}

export default ArticleForm
