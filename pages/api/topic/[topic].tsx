import clientPromise from "../../../lib/mongodb";
import { NextApiResponse } from 'next'
const dbName = process.env.DB_NAME;
type reqType = {
    topic: string
}
export default async (req: any, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db(dbName);
        if(client){

        switch (req.method) {
           
            case 'GET':
                const {topic}:reqType  = req.query
                const topicList = await db
                    .collection("post")
                    .find({"topic": topic })
                    .toArray();
                 res.status(200).send({
                    code: 200,
                    msg: "Retrive success",
                    data: topicList
                 });
                break;
            
            case 'POST':
                const body = req.body;
                if(!body.title){
                    res.status(400).send({
                        code: 400,
                        msg: "Title is required",
                        data: null
                     });
                }
                if(!body.content){
                    res.status(400).send({
                        code: 400,
                        msg: "Content is required",
                        data: null
                     });
                }
                if(!body.topic){
                    res.status(400).send({
                        code: 400,
                        msg: "Topic is required",
                        data: null
                     });
                }
                const date = new Date();
                const createdNewPost = await db
                    .collection("post")
                    .insertOne({...body, createdAt: date})
                if(createdNewPost){
                    res.status(201).send({
                        code: 201,
                        msg: "Created",
                        data: createdNewPost
                     });
                }else {
                    
                    res.status(400).send({
                        code: 400,
                        msg: "Unknow err",
                        data: null
                     });
                }
                 
                break;
            case 'PATCH':
              
               
                break;
            default:
                break;
        
        }
    }else{
        res.send("500 Internal ERROR")
    }
       
   } catch (e) {
       console.error(e);
   }
};