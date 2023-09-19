require('dotenv').config()

const app = require('./app-server')

const PORT = process.env.PORT || 8003

app.listen(PORT, () => {
	console.log(`API Listening on port ${PORT}`);
});