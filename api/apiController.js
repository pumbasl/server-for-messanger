let history = [];
let idHistoryMessage = 0;

class apiController {
    async getMessages(req, res){
        try{
            const { messageId } = req.body;
            if(messageId){
                return res.json({data: history.slice(messageId)});
            }
            return res.json({data: history.slice()});
        } catch(e){
            console.log(e)
            return res.status(400).json({error: e});
        }
    }

    async addMessage(req, res){
        try{
            const { data } = req.body;
            data.timestamp = Date.now();
            data.id = ++idHistoryMessage;
            history.push(data);
            return res.status(200).json({});
        } catch(e){
            return res.status(400).json({error: e});
        }
    }
}

module.exports = new apiController();