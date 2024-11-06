import { useState } from "react";
import { User } from "@/core/types/user";
import { UserService } from "@/services/user/user.service"

const service = new UserService();

// Como estou usando o banco de dados do firebase, fiz um esquema só para simular o login

export const useUser = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const registerUser = async (user: User): Promise<void> => {
        setLoading(true)
        try {
            const users = await service.fetchUsers();
            if (isEmailTaken(user.email, users ?? [])) {
                setLoading(false)
                throw new Error("Usuario já cadastrado");
            } else {
                await service.createUser(user)
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            throw error
        }
    };

    // Função para verificar se o email já existe
    const isEmailTaken = (email: string, users: User[]): boolean => {
    return (users ?? []).some(user => user.email === email);
};

    return { loading, registerUser };
};
