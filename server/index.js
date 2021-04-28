const express = require('express');
const mess = require('./controllers/messages_controller')

const app = express();
const port = 3001;

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.get('/api/messages', mess.readMessages)
app.post('/api/messages', mess.createMessage)
app.put('/api/messages/:id', mess.updateMessage)
app.delete('/api/messages/:id', mess.deleteMessage)

app.listen(port,()=>console.log(`Required Message, listening on port: ${port}`))