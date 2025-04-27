import { Genre } from '../models/genre.model';
import { httpClient } from './http';

export const fetchGenre = async() => {
    const response = await httpClient.get<Genre[]>('/genre');
    return response.data;
}
