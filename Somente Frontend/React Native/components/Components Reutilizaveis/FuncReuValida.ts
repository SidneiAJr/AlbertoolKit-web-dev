import AsyncStorage from '@react-native-async-storage/async-storage'
// Instlaar npm install @react-native-async-storage/async-storage
// npx expo install @react-native-async-storage/async-storage

export const FormartarSaida1 = (valor:number)=>{
   return `Valor formado | 2 Casas decimais ${valor.toFixed(2)}`
}

export const FormartarSaida2 = (valor:number)=>{
   return `Valor formado | 3 Casas decimais ${valor.toFixed(3)}`
}

export const FormartarSaida3 = (valor:number)=>{
    return `Valor formado | 4 Casas decimais ${valor.toFixed(4)}`
}

export const formatarCPF = (entrada: string) => {
    return entrada.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

export const formatarCNPJ = (entrada: string) => {
    return entrada.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
}

export const formatarTelefone = (entrada: string) => {
    return entrada.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
}

export const formatarCEP = (entrada: string) => {
    return entrada.replace(/(\d{5})(\d{3})/, '$1-$2')
}

export const formatarCaixaAlta = (entrada:string)=>{
    return entrada.toUpperCase()
}

export const formataCaixaBaixa = (entrada:string)=>{
    return entrada.toLowerCase()
}

export const salvarLocal = async(chave: string, valor: any)=>{
    await AsyncStorage.setItem(chave, JSON.stringify(valor))
}

export const formatarData = (data: string) => {
   const [ano, mes, dia] = data.split('-')
    return `${dia}/${mes}/${ano}`
}

export const calcularIdade = (data_nascimento: string): number => {
    const hoje = new Date()
    const nascimento = new Date(data_nascimento)
    let idade = hoje.getFullYear() - nascimento.getFullYear()
    const mes = hoje.getMonth() - nascimento.getMonth()
    
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--  // ← ainda não fez aniversário esse ano
    }
    return idade
}

export const capitalizarNome = (nome: string): string => {
    return nome
        .toLowerCase()
        .split(' ')
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
        .join(' ')
}

export const soma = (valor1:number,valor2:number,valor3:number,valor4:number) =>{
    return valor1+valor2+valor3+valor4
}

export const mult = (valor1:number,valor2:number,valor3:number,valor4:number) =>{
    return valor1*valor2*valor3*valor4
}

export const lerLocal = async (chave: string) => {
    const valor = await AsyncStorage.getItem(chave)
    return valor ? JSON.parse(valor) : null
}

export const removerLocal = async (chave: string) => {
    await AsyncStorage.removeItem(chave)
}

export const validarSenhaComMensagem = (senha: string): string | null => {
    if (senha.length < 8) return 'Senha deve ter no mínimo 8 caracteres'
    if (!/[A-Z]/.test(senha)) return 'Senha deve ter pelo menos uma letra maiúscula'
    if (!/[0-9]/.test(senha)) return 'Senha deve ter pelo menos um número'
    return null // ← null = válida
}

export const validarTelefone = (telefone: string): boolean => {
    return /^\(\d{2}\) \d{5}-\d{4}$/.test(telefone)
}

export const validarEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const validarNome = (nome: string): boolean => {
    return nome.trim().length >= 3
}
