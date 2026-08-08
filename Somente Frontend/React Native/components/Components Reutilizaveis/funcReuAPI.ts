import { useState, useEffect } from 'react'
import axios from 'axios'

// Precisa Instalar o Axios mais facil e mais simples que o fetch

const FuncaoReu = (Url: string) => {
  const [dados, setDados] = useState<any>(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    axios.get(Url)
      .then(r => setDados(r.data))
      .catch(() => setErro('Erro ao buscar'))  // ← erro fica aqui dentro
      .finally(() => setCarregando(false))
  }, [Url])

  return { dados, carregando, erro }  // ← sempre retorna
}

export default FuncaoReu
