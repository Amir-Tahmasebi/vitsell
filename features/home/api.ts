import { client } from '@/services/client';

export const fetchHomeData = async () => {
    // fetch data
    const result = await client.get('/');
    return {
        name: "test"
    };
}