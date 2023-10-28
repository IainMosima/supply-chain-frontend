import { Services } from "@/models/Services";
import { fetchData } from "./FetchData";

export async function getAllServices(): Promise<Services[] | []> {
    const response = await fetchData(`${process.env.BACKENDIP}/api/unsecured/services`, { method: 'GET', cache: 'no-store' });
    if (response) return response.json();
    return [];

}

export async function getRandomServices(): Promise<Services[] | []> {
    const response = await fetchData(`${process.env.BACKENDIP}/api/unsecured/services/random`, { method: 'GET', cache: 'no-store' });
    if (response) return response.json();
    return [];
}