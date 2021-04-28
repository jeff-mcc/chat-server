let messages = [];
let id = 0;

module.exports = {
    createMessage: (req,res)=>{
        const {text,time} = req.body;
        const newMessage = {
            id,
            text,
            time
        }
        id += 1;
        messages = [...messages,newMessage]
        res.status(200).send(messages)
    },
    readMessages: (req,res)=>{
        res.status(200).send(messages)
    },
    updateMessage: (req,res)=>{
        const {text,time} = req.body;
        const idx = req.params.id;
        const index = messages.findIndex(e=>e.id === +idx)
        const editedMessage = {
            id: +idx,
            text: text || messages[index].text,
            time: time || messages[index].time
        }
        if (index === -1){
            return res.status(500).send("The selected message does not exist")
        }
        messages.splice(index,1,editedMessage)
        res.status(200).send(messages)
    },
    deleteMessage: (req,res)=>{
        const idx = req.params.id;
        messages = messages.filter(e=>e.id!== +idx);
        res.status(200).send(messages)
    }
}