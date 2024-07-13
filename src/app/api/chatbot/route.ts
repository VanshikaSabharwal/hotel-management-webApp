// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { chain } from "@/utilis/chain";
// import { Message } from "@/types/message";

// export async function POST(request:Request){
//     const body = await request.json();
//     const question:string = body.query;
//     const history:Message[] = body.history ?? []
//     const res = await chain.call(
//         question:question,
//         chat_history: history.map(h+> history.content)
//     )
// }
