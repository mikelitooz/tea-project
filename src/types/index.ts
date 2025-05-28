// src/types/index.ts

export interface Contributor {
    id: string;
    name: string;
    email: string;
    role: string;
}

export interface Project {
    id: string;
    name: string;
    description: string;
    contributors: Contributor[];
    url: string;
    createdAt: Date;
    updatedAt: Date;
}