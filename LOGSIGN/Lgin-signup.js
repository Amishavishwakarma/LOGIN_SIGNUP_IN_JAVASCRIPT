const input=require("prompt-sync");
const prompt=input();
var user="signup"
var user=prompt("Wheater you want to sign up or login ");  
if (user=="signup"){
    let name=prompt("Enter your name");
    let password1=prompt("Enter your password!");
    let sp1=password1.includes("#");
    let sp2=password1.includes("$");
    let len=password1.length
    if (len>=8 && len<16){
        if ( sp1==true || sp2==true){
            console.log("yes it is valid password")
            let password2=prompt("Conform your password");
            const fs=require("fs")
          
            
            if (password1===password2){
                let user_data={}
                var jsonobject={user_record:[]}
                user_data.username=name;
                user_data.password1=password1;
                user_data.password2=password2;
                for(i in jsonobject){
                    jsonobject[i].push(user_data)
                }
                var change=JSON.stringify(jsonobject)
                fs.writeFile("data.json",change,(err)=>{
                    console.log("congratulations you have sign up successfully");
                });
            
            }
            else{
                console.log("your confirmed password is incorrect");
            }
        }
        else{
            console.log("your password must include @,#");
        }
    
        
    }
    else{
        console.log("your pasword is not correct");
    }
    
}
else if(user=="login"){
    let name=prompt("Enter your name");
    let password1=prompt("Enter your password!");
    const fs=require("fs")
    fs.readFile("data.json","UTF-8",(err,data)=>{
        let include1=data.includes(name);
        let include2=data.includes(password1)
        if (include1==true && include2==true){
            console.log("you have login successfuly");
        }
        else{
            console.log("Oppsss...try again")
        }

    });

}
