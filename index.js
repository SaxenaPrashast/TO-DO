import { express } from express;
import { createTodo } from ".types.js";
const app = express();

app.use(express.json());

app.post("/todo",(req,res)=>{
    const createPayload = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayload);

    if(!parsedPayLoad){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
    //put in the mongodb

})

app.get("/todos",(req,res)=>{

})

app.put("/completed",(req,res)=>{
    const updatePayload = req.body;
    const ParsedPayLodd = updatePayload.safeParse(updatePayload);
    if(!updatePayload){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    } 
})

app.listen(3000);