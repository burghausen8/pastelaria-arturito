export class HttpClient {
    async get(url: string, options: any): Promise<any> {
        try {
            const response = await fetch(url, {
                method: 'GET',
                ...options,
            });
            if (!response.ok) {
                throw new Error(`[GET] Error: ${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            throw error;
        }
    }


    async post(path: string, data: any, options: any): Promise<any> {
        try {
            const response = await fetch(path, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`[POST] Error: ${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            throw error;
        }
    }


    async delete(url: string): Promise<any> {
        try {
            const response = await fetch(url, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`[DELETE] Error: ${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            throw error;
        }
    }

    async patch(url: string, body: any): Promise<any> {
        try {
            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error(`[PATCH] Error: ${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            throw error;
        }
    }
}