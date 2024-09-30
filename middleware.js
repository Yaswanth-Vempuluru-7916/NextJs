import { NextResponse } from "next/server";

export function middleware(request){

    if(request.nextUrl.pathname != "/loginnn"){
        return NextResponse.redirect(new URL("/loginnn" , request.url))
    }

    console.log('middleware ran');
    return NextResponse.json({success : "Successfully ran"})
}

//direction

export const config ={
    matcher : ['/userslist/:path*']
}