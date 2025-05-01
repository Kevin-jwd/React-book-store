import { Genre } from '../models/genre.model';
import { httpClient } from './http';

export const fetchGenre = async() => {
    const response = await httpClient.get<{message: string, results: Genre[]}>('/genres');
    return response.data.results;
}
