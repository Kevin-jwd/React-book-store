import { useEffect, useState } from "react";
import { Genre } from "../models/genre.model";
import { fetchGenre } from "../api/genre.api";

export const useGenre = () => {
    const [genre, setGenre] = useState<Genre[]>([]);
    useEffect(() => {
        fetchGenre().then((genre) => {
            if (!genre) return;
            const genreWithAll = [
                {
                    id: null,
                    name: "전체",
                },
                ...genre,
            ];
            setGenre(genreWithAll);
        });
    }, []);

    return { genre };
};
