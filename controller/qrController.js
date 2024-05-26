const qrcode=require("qrcode");

const createQr=(req,res)=>{
    try {
        //console.log("hello");
        let data=req.body;
        // let data={name:"Deepika",
        //     age:33,
        //     gender:"female"
        // }
        let stringdata = JSON.stringify(data)

        qrcode.toDataURL(stringdata, function (err, code) {
            if(err) return console.log("error occurred")
         
            // Printing the code
            console.log(code)
            res.status(200).send(code);
        })

        // qrcode.toString(data, function (err, string) {
        //     console.log(string);
        //   })


        
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error generating QR code'+error);
    }
     

    
}

module.exports=createQr;