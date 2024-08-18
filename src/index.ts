import { Usuario } from "./repository/usuarioDb";
import usuarioRepository from "./repository/usuarioRepository";

const newUser: Usuario = {
    id: 1010,
    nome: 'Ricardo',
    ativo: true,
    tempoDeAulaMinutos: 12651n,
    contato: { telefone: '1231561' },
    dadoExternoNaoTratado: false,
};

console.log(usuarioRepository.getUsuarios());
console.log(usuarioRepository.getUserById(123));
console.log(usuarioRepository.addUser({...newUser}));
console.log(usuarioRepository.deleteUser(123));
console.log(usuarioRepository.getUserById(123));
