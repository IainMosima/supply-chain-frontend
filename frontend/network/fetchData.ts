export async function fetchData(url: RequestInfo, init?: RequestInit) {
    if (process.env.BACKENDIP) {
        const response = await fetch(url, init);
        if (response.ok) {
            return response;
        } else {
            throw Error(`Request failed with status ${response.status}`);
        }
    }

}