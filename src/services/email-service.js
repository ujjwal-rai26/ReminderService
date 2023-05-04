const sender=require('../config/emailConfig');

const sendBasicEmail= asyn (mailFrom,mailTo,mailSubject,mailBody)=>{

   try {
   const response  =await sender.sendMail({
        from:mailFrom,
        to:mailTo,
        subject:mailSubject,
        text:mailBody
      })

   } 
   catch (error) {
    console.log('error');
   }

}

module.exports={
    sendBasicEmail
}