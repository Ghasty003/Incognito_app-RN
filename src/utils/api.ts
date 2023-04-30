async function API (endpoint: string, method: "GET" | "POST", values: object) {
    const res = await fetch(`https://incognito-j4hs.onrender.com/${endpoint}`, {
        method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
    });
}



export default API;