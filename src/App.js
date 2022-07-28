import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import ArticleDetail from './pages/ArticleDetail'
import ArticleForm from './pages/ArticleForm'

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
							path="/article/create/:articleId"
							element={<ArticleForm />}
						/>
					</Routes>
				</div>
			</Router>
		</>
	)
}

export default App
