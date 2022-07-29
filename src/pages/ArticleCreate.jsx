import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createArticle } from '../features/articleSlice'
import { useNavigate } from 'react-router-dom'

function ArticleForm() {
	const [formData, setFormData] = useState({
		title: '',
		text: '',
	})

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { isError, message } = useSelector((state) => state.article)

	useEffect(() => {
		if (isError) {
			console.log(message)
		}
	}, [isError, message])

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
		dispatch(createArticle(articleData))
		navigate('/')
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
