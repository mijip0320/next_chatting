import { NextResponse } from "next/server";

export async function POST(request: Request, { params }: { params: { testId: string } }) {
    const userData = await request.json();
    console.log('server userData', userData);
    console.log('server param', params);

    return NextResponse.json({message : '사용자가 성공적으로 생성되었습니다.'})
}