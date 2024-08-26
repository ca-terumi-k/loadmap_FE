import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    return NextResponse.json(new Date().toISOString(), { status: 200 });
}
