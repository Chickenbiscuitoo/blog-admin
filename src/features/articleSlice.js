import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import articleService from './articleService'

const initialState = {
	articles: [],
	selectedArticle: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
}

// Get All Articles
export const getAllArticles = createAsyncThunk(
	'articles/getAll',
	async (_, thunkAPI) => {
		try {
			return await articleService.getAllArticles()
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

// Get Specific Article
export const getArticle = createAsyncThunk(
	'articles/getOne',
	async (id, thunkAPI) => {
		try {
			return await articleService.getArticle(id)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

// Create new article
export const createArticle = createAsyncThunk(
	'articles/create',
	async (articleData, thunkAPI) => {
		try {
			return await articleService.createArticle(articleData)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

// Update article
export const updateArticle = createAsyncThunk(
	'articles/update',
	async (articleData, id, thunkAPI) => {
		try {
			return await articleService.updateArticle(articleData, id)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

// Delete article
export const deleteArticle = createAsyncThunk(
	'articles/delete',
	async (id, thunkAPI) => {
		try {
			return await articleService.deleteArticle(id)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllArticles.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getAllArticles.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.articles = action.payload
			})
			.addCase(getAllArticles.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(getArticle.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getArticle.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.selectedArticle = action.payload
			})
			.addCase(getArticle.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(createArticle.pending, (state) => {
				state.isLoading = true
			})
			.addCase(createArticle.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.selectedArticle = action.payload
			})
			.addCase(createArticle.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(updateArticle.pending, (state) => {
				state.isLoading = true
			})
			.addCase(updateArticle.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.selectedArticle = action.payload
			})
			.addCase(updateArticle.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(deleteArticle.pending, (state) => {
				state.isLoading = true
			})
			.addCase(deleteArticle.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.articles = state.articles.filter(
					(article) => article._id !== action.payload.id
				)
			})
			.addCase(deleteArticle.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
	},
})

export const { reset } = articleSlice.actions
export default articleSlice.reducer
