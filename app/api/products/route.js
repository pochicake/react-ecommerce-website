export async function GET(req) {
    var apiResp = await fetch("https://dummyjson.com/products");

    if (!apiResp.ok) {
        return new Response(JSON.stringify(await apiResp.json()), { status: apiResp.status });
    }
    
    var items = await apiResp.json();
    
    return new Response(JSON.stringify(items), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    })
}