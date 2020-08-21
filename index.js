const { app, port } = require('./src')

app.listen(port, () => console.log(`http://localhost:${port}`))