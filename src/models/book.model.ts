export interface Book {
    id: number;
    title: string;
    img: number;
    genre_id: number;
    form: string;
    isbn: string;
    summary: string;
    description: string;
    author: string;
    pages: number;
    contents: string;
    price: number;
    likes: number;
    pub_date: string;
}

export interface BookDetail extends Book {
    genre_name: string;  
    liekd: boolean
}
