const express=require('express');
const bodyParser =require('body-parser');

const { PORT }=require(`./config/serverConfig`);


//const {sendBasicEmail}=require('./services/email-service');

const TicketController=require('./controllers/ticket-controller');
const jobs=require('./utils/job');

const setupAndStartServer=async ()=>{
   const app=express();

   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended:true}));

   const channel =await createChannel();

   app.post('/api/v1/tickets',TicketController.create);

   app.listen(PORT,()=>{
    console.log(`server stared at the port ${PORT}`);
       jobs();
//     sendBasicEmail(
//       'support@admin.com',
//       'ujjwalrai111111@gmail.com',
//       'this is testsing mail',
//       'heyy king'
//     );

    })

}

setupAndStartServer();