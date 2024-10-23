'use client'

export default function Page({ params }: { params: { id: string } }) {
    const handleSumbit = async (e: React.FormEvent) => {
        const response = await fetch("/api/test/1234", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({name : "test name", email : "test email"})
        })

        const data = await response.json();
        
        console.log('data',data)
    }

  
    return <div>다이나믹 라우트 페이지{params.id}
        <button
            type="submit"
            onClick={handleSumbit}>전송</button>
    </div>
}