class API {

    public constructor() {

    }

    public async get(endpoint = "") {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users/" + endpoint);
            const json = await res.json();

            return json;
        } catch (error) {
            console.log(error)
        }
    }

    public async post(endpoint = "", data: object) {
        try {

            const res = await fetch("https://incognito-j4hs.onrender.com/" + endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
        
            const json = await res.json();

            if (res.ok) {
                return json;
            } else {
                return json.message;
            }

        } catch (error) {
            console.log(error);
        }
    }
}


const api = new API();


export default api;