const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwOTAyMSwiZXhwIjoxOTU1MDg1MDIxfQ.v4B-VNkc9Xc9bIM4ig0BrZcgdU2bqx3VGiJiMMYNcis';

const SUPABASE_URL = 'https://iddyxpegdpnmmnebvghi.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAllPokemon() {
    const response = await client
        .from('pokemon-db')
        .select();

    return response.data;
}

export async function getAllMotorcycles() {
    const response = await client
        .from('motorcycles')
        .select();

    return response.data;
}

export async function getAllDogs() {
    const response = await client
        .from('dogs')
        .select();

    return response.data;
}

export async function getAllPresidents() {
    const response = await client
        .from('presidents')
        .select();

    return response.data;
}