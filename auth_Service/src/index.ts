import express, {Request, Response} from "express"
const server = express()

server.get('/api',(req: Request, res: Response)=>{
    res.send({message: "hello wordl"})
})
server.listen(80,()=>{
    console.log("Aplicación corriendo")
})