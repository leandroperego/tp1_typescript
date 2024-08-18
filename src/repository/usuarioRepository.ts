import usuarios, { Usuario } from "./usuarioDb";

class UsuarioRepository {
    getUsuarios(): Usuario[] {
        return usuarios;
    }

    getUserById(id: number): Usuario | null {
        
        if (typeof id !== 'number') {
            throw new Error('Id informado deve ser um número.');
        }

        return usuarios.find(u => u.id === id) || null;
    }

    addUser(user: Usuario): Usuario[] {
        const novoUsuario: Usuario = {
            id: user.id,
            nome: user.nome,
            ativo: user.ativo,
            tempoDeAulaMinutos: user.tempoDeAulaMinutos,
            contato: user.contato,
            dadoExternoNaoTratado: user.dadoExternoNaoTratado
        };
        usuarios.push(novoUsuario);
        return usuarios;
    }

    deleteUser(id:number) : Usuario[] {

        if (typeof id !== 'number') {
            throw new Error('Id informado deve ser um número.');
        }

        const index: number = usuarios.findIndex(u => u.id === id);
        if (index !== -1) {
            usuarios.splice(index, 1);
        } else{
            throw new Error('Usuário informado não existe.'); 
        }

        return usuarios;
    }
}

export default new UsuarioRepository();