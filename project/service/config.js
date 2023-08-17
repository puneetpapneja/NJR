const PORT = 5000;



const app = express();

app.use(express.json());

app.get("/health",(req, res)=>{

})

app.listener(port,()=>console.log("services started",port))*;