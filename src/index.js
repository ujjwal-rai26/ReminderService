const express=require('express');
const bodyParser =require('body-parser');

const { PORT }=require(`./config/serverConfig`);

const {sendBasicEmail}=require('./services/email-service');

const setupAndStartServer=()=>{
   const app=express();

   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended:true}));

   app.listen(PORT,()=>{
    console.log(`server stared at port ${PORT}`);

    sendBasicEmail(
      'support@admin.com',
      'ujjwalrai111111@gmail.com',
      'this is testsing mail',
      'heyy king'

    );

   })

}

setupAndStartServer();