
export type Usuario = {
    id: number
    nome: string
    ativo: boolean
    tempoDeAulaMinutos: bigint
    contato: { telefone: string }
    dadoExternoNaoTratado?: string | number | boolean
}

const usuarios: Usuario[] = [
    {
        id: 123,
        nome: 'Renan',
        ativo: true,
        tempoDeAulaMinutos: 145687983212n,
        contato: { telefone: '2189523598' },
        dadoExternoNaoTratado: 123,
    },
    {
        id: 625,
        nome: 'Jéssica',
        ativo: false,
        tempoDeAulaMinutos: 12n,
        contato: { telefone: '2189523598' },
        dadoExternoNaoTratado: "a.123",
    },
    {
        id: 127,
        nome: 'Pedro',
        ativo: true,
        tempoDeAulaMinutos: 7983212n,
        contato: { telefone: '2189523598' },
        dadoExternoNaoTratado: true,
    },
    {
        id: 823,
        nome: 'Arthur',
        ativo: true,
        tempoDeAulaMinutos: 14563212n,
        contato: { telefone: '2189523598' }
    },
];

export default usuarios;