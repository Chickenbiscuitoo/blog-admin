import axios from 'axios'

const API_URL = 'http://localhost:5000/api/'

// Get articles
const getAllArticles = async () => {
	const response = await axios.get(API_URL + 'articles')

	return response.data.list_articles
}

// Get specific article
const getArticle = async (articleId) => {
	const response = await axios.get(API_URL + 'article/' + articleId)
	return response.data.article
}

// Create new article
const createArticle = async (articleData) => {
	const response = await axios.post(
		API_URL + 'article',
		articleData
	)

	return response.data
}

// Update article
const updateArticle = async (articleData, id) => {
	const response = await axios.put(
		API_URL + 'article/' + id,
		articleData
	)

	return response.data
}

// Delete article
const deleteArticle = async (id) => {
	const response = await axios.delete(API_URL + 'article/' + id)

	return response.data
}

const articleService = {
	getAllArticles,
	getArticle,
	createArticle,
	updateArticle,
	deleteArticle,
}

export default articleService
