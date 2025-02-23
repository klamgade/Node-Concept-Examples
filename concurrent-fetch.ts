//Problem Statement: Extend the existing API to fetch user data from two different URLs concurrently.
//Expected API Behavior:
//The API should have a GET endpoint: /users
//It should return a JSON array of users.
//The API should fetch user data from two different URLs concurrently:

async function fetchFromURLs(urls: URL[]): Promise<(any | { error: string })[]> {

    try {
        const fetchedPromises = urls.map((url) =>
            fetch(url)
                .then((response) => response.ok ? response.json() : Promise.reject({ error: `Failed to fetch ${url}` }))
                .catch((error) => ({ error: error.message || `Unknown error fetching ${url}` }))
        );
        return await Promise.all(fetchedPromises)
            ;
    } catch (error) {
        return [{ error: "Failed to fetch data from one or more URLs" }];
    }
}