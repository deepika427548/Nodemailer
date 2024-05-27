
const nodemailer=require("nodemailer");
const {email,pass}=require("../env.js");
const sendMail=(req,res)=>{
    try{
        
        const {mailTo}=req.body;
        console.log(mailTo);

        var config={
            service: 'gmail',
            auth: {
              user:email,
              pass:pass
            }
          }
          console.log(config);
         
          var transporter = nodemailer.createTransport(config);

          var message = {
            from:email,
            to: mailTo,
            subject:"Assignment Nodejs",
            text:"This is send through nodemailer by Deepika Dinesh, email:deepadinesh2011@gmail.com"
          };
          
          console.log(message);
          
            transporter.sendMail(message);
             res.status(200).send({message:'the mail has send successfully'});

          }
          
      catch (error) {
         console.error(error.message);
            res.status(500).send('The mail has not been send'+error.message);
      }

    //res.status(200).send('The mail has send successfully')
}

module.exports=sendMail;