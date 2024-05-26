const express=require("express");


const app= new express();
const routes=require("./router/mailrouter");
const route=require("./router/qrRouter");


const PORT=4001;

//middlewares
app.use(express.json());
app.use('/',routes,route);


  

app.listen(PORT,()=>{
    console.log(`the server is listening on ${PORT}`);
})

