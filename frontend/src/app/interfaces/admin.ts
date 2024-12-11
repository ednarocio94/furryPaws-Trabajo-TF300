export interface Admin extends Document {
    image: string; 
    fullName: string;
    email: string;
    password: string; 
    role: string; 
    createdAt?: Date; // Fecha de creación (automáticamente por timestamps de Mongoose)
    updatedAt?: Date; // Fecha de última actualización (automáticamente por timestamps de Mongoose)
}