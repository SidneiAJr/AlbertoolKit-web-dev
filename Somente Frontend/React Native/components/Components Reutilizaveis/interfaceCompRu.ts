export interface Texto{
    tipo: 'Grande' | 'Pequeno' | 'Medio'
    cor: string
    fonteEstilo?: 'normal' | 'italic' | 'bold'
     style?:any
}

export interface Card{
    tamanho: number
    borda?: number
    fundo?: string
    isActive?:boolean
    style?:any
}

export interface Lista{
  dados: any[]
  keyExtractor: (item:any) => string
  renderItem: (item:any) => React.ReactElement
  titulo?: string
  vazio?: string
  style?: any
}

export interface Imagem{
   tammanho: number
   borda?: number
   cor?: string
   fundo?:string
    style?:any
}

export interface loading{
   visivel: boolean
    mensagem?: string
    cor?: string
     style?:any
}


export interface input{
    tamanho: number
    borda: number
    corBorda: string
    isActive?: boolean
    obrigatorio?: string
     style?:any
}

export interface Header {
    titulo: string
    subtitulo?: string
    voltarVisivel?: boolean
    onVoltar?: () => void
    corFundo?: string
     style?:any
}
export interface Alert {
    titulo: string
    mensagem: string
    tipo?: 'sucesso' | 'erro' | 'aviso' | 'info'
    onConfirmar?: () => void
    onCancelar?: () => void
     style?:any
}

export interface Badge {
    valor: number
    cor?: string
    visivel?: boolean
     style?:any
}

export interface Dropdown {
    opcoes: string[]
    selecionado?: string
    onSelecionar: (item: string) => void
    placeholder?: string
    borda?: number
     style?:any
}

export interface Botao{
    tamanho: number
    borda: number
    texto:string
    cor: string
    onConfirmar?: () => void
    onCancelar?: () => void
    style?:any
}

export interface Modal {
    visivel: boolean
    onFechar: () => void
    titulo?: string
    conteudo?: React.ReactElement
    corFundo?: string
    style?:any
}
