import { rest }  from "msw";


const handlers =[
    rest.get("http://localhost:3030",(req,res,ctx)=>{
        return res(
            ctx.json([
                {name:"Choclate",imagePath:"/images/chocolate.png"},
                {name:"Vanilla",imagePath:"/images/vanilla.png"}
            ])
        )
    })
]