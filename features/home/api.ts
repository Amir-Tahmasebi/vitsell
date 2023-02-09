import { client } from '@/services/client';

export async function fetchHomeData() {
    // Fetch data 
    const response = await client.get('/'); 
    return {
        name: "test"
    };
}