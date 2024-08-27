import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const nowTime = new Date().toISOString();
    console.log(`SSG: ${nowTime}`);
    return NextResponse.json(nowTime, { status: 200 });
}
