import { NextResponse } from "next/server";

export async function POST(req,res){
    let {name ,age ,email} = await req.json()
    

    if(!name ||!email || !age){
        return NextResponse.json({error :"required field not found",ok:false },{status : 400})
    }

    console.log(name,age,email);

    return NextResponse.json({success : "Credentials verified",ok:true},{status : 201})
}
