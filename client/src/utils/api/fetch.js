const BASE_URL = import.meta.env.VITE_BACKEND_URL;
async function fetchData(route, method = "GET", data = null) {
    try {
        let url = new URL(route, BASE_URL);
        const fetchOptions = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        };

        if ((method === "POST" || method === "PUT") && data) {
            fetchOptions.body = JSON.stringify(data);
        } else if (data) {
            Object.entries(data).forEach(([key, value]) => {
                if (
                    typeof value === "string" &&
                    value !== undefined &&
                    value !== null
                ) {
                    console.log("key value", key, "|", value);
                    url.searchParams.append(key, value);
                }
            });
        }
        console.log("data", data);
        const response = await fetch(url.toString(), fetchOptions);
        return response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function enterAuction(auctionId, userId) {}
async function exitAuction(auctionId, userId) {}

async function placeBid(auctionId, userId, bidAmount) {}

export { enterAuction, placeBid };
