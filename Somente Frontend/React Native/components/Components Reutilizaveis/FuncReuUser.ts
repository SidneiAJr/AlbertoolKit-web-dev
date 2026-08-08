export interface UsuarioGeral {
    id: string
    nome: string
    email: string
    foto?: string
    ativo?: boolean
    data_nascimento: string
    createdAt?: string
}

export interface UsuarioCadastro {
    nome: string
    email: string
    senha: string
    data_nascimento: string
    foto?: string
}

export interface UsuarioLogin {
    email: string
    senha: string
}

export interface UsuarioTrocarSenha {
    senhaAtual: string
    senhaNova: string
    confirmarSenha: string
}

export interface UsuarioResposta {
    usuario: UsuarioGeral
    token: string
}

export interface UsuarioAtualizar {
    nome?: string
    foto?: string
    data_nascimento?: string
}
