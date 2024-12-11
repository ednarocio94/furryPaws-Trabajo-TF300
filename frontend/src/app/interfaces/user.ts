export interface User {
    image: string;
    fullName: string;
    email: string;
    password: string;
    role?: string;
    phone: number;
    isAdult?: boolean;
    address: string;
}
