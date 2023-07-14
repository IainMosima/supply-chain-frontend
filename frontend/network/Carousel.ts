import { Services } from "@/models/Services";
import { fetchData } from "./FetchData";
import { Carousel } from "@/models/Carousel";

export async function getCarouselImages(): Promise<Carousel[]> {
    const response = await fetchData(`${process.env.BACKENDIP}/api/images`, { method: 'GET', cache: 'no-store' });
    if (response) return response.json();
    return [];
}