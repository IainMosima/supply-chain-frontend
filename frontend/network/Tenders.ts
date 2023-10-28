import { TenderResult } from "@/models/Tenders";
import { fetchData } from "./FetchData";
import ConvertToTitleCase from "@/utils/ConvertToTitleCase";

export async function getTendersResults(server: boolean, country: string, pageNumber?: number, location?: string, pageSize = 10): Promise<TenderResult | undefined> {
    let response: Response | undefined;
    if (!pageNumber) pageNumber = 0;
    if (server) {
        if (location) {
            response = await fetchData(`${process.env.BACKENDIP}/api/unsecured/tenders/${ConvertToTitleCase(country)}?pageSize=${pageSize}&pageNumber=${pageNumber}&location=${location}`, { cache: 'no-store' });
        } else {
            response = await fetchData(`${process.env.BACKENDIP}/api/unsecured/tenders/${ConvertToTitleCase(country)}?pageSize=${pageSize}&pageNumber=${pageNumber}`, { cache: 'no-store' });

        }
    } else {
        if (location) {
            response = await fetchData(`/api/unsecured/tenders/${ConvertToTitleCase(country)}?pageSize=${pageSize}&pageNumber=${pageNumber}&location=${location}`, { cache: 'no-store' });
        } else {
            response = await fetchData(`/api/unsecured/tenders/${ConvertToTitleCase(country)}?pageSize=${pageSize}&pageNumber=${pageNumber}`, { cache: 'no-store' });

        }
    }


    if (response) {
        return response.json();
    }

}