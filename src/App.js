import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import ArticleDetail from './pages/ArticleDetail'
import ArticleCreate from './pages/ArticleCreate'
import ArticleUpdate from './pages/ArticleUpdate'
import ArticleDelete from './pages/ArticleDelete'

function App() {
	return (
		<>
			<Router>
				<div className="container">
					<Header />
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route
							path="/article/:articleId"
							element={<ArticleDetail />}
						/>
						<Route
							path="/article/create"
							element={<ArticleCreate />}
						/>
						<Route
							path="/article/update/:articleId"
							element={<ArticleUpdate />}
						/>
						<Route
							path="/article/delete/:articleId"
							element={<ArticleDelete />}
						/>
					</Routes>
				</div>
			</Router>
		</>
	)
}

export default App
