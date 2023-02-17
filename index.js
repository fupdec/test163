const express = require('express')
const app = express()
const router = express.Router()
const history = require('connect-history-api-fallback')
const cors = require('cors')

const path = require('path')
const axios = require("axios")
const cheerio = require("cheerio")

app.use(cors())
app.use(router)

// using vue's built as static files
const src = path.join(__dirname, './dist')
const staticFileMiddleware = express.static(src)
app.use(staticFileMiddleware)
app.use(history({
	disableDotRule: true,
	verbose: true
}))
app.use(staticFileMiddleware)

router.get('/counter', (req, res) => {
	// req
	let query = 'https://www.google.com/'
	axios.get(query).then((response) => {
		if (response.status !== 200) return
		const html = response.data
		const $ = cheerio.load(html)
		res.status(201).send(data)
	}, (err) => {
		res.status(500).send({
			message: err.message || "Some error occurred while performing query."
		})
	})
})

// starting server
const port = 3333
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})