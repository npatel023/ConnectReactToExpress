const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/create', (request, response) => {
    console.log(request.body);
    response.json({ success: 'true' })
})

app.listen(PORT, () => console.log('server is running at ' + PORT));