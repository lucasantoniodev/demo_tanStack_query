import { queryClient } from "."


// Usar essa função quando um usuário atualizar uma postagem por exemplo
export const handleChangeRepositoryDescription = async (key: string) => {
    await queryClient.invalidateQueries([key])
}