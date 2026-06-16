#!/bin/bash

echo "🚀 Criando Componentes React..."

# Cria pastas
mkdir -p src/Components
mkdir -p src/Screen
mkdir -p src/Hooks
mkdir -p src/Utils
mkdir -p src/Services
mkdir -p src/Types
mkdir -p src/Assets
mkdir -p src/Context

# ============================================
# COMPONENTES - BOTÕES
# ============================================
touch src/Components/BotaoSair.tsx
touch src/Components/BotaoLogar.tsx
touch src/Components/BotaoCadastrar.tsx
touch src/Components/BotaoEditar.tsx
touch src/Components/BotaoDeletar.tsx
touch src/Components/BotaoSalvar.tsx
touch src/Components/BotaoCancelar.tsx
touch src/Components/BotaoVoltar.tsx
touch src/Components/BotaoPesquisar.tsx
touch src/Components/BotaoFechar.tsx
touch src/Components/BotaoWhatsApp.tsx
touch src/Components/BotaoEnviar.tsx

# ============================================
# COMPONENTES - INPUTS
# ============================================
touch src/Components/InputTexto.tsx
touch src/Components/InputNumero.tsx
touch src/Components/InputSenha.tsx
touch src/Components/InputEmail.tsx
touch src/Components/InputTelefone.tsx
touch src/Components/InputCPF.tsx
touch src/Components/InputCNPJ.tsx
touch src/Components/InputData.tsx
touch src/Components/InputSelect.tsx
touch src/Components/TextArea.tsx
touch src/Components/InputComIcone.tsx

# ============================================
# COMPONENTES - CARDS
# ============================================
touch src/Components/CardGlass.tsx
touch src/Components/CardDefault.tsx
touch src/Components/CardAdmin.tsx
touch src/Components/CardAlerta.tsx
touch src/Components/CardInfo.tsx
touch src/Components/CardDashboard.tsx

# ============================================
# COMPONENTES - NAVEGAÇÃO
# ============================================
touch src/Components/MenuSuperior.tsx
touch src/Components/MenuLateral.tsx
touch src/Components/MenuSuspenso.tsx
touch src/Components/Header.tsx
touch src/Components/Footer.tsx
touch src/Components/Sidebar.tsx

# ============================================
# COMPONENTES - TIPOGRAFIA
# ============================================
touch src/Components/LogoSmall.tsx
touch src/Components/LogoLarge.tsx
touch src/Components/Titulo.tsx
touch src/Components/Subtitulo.tsx
touch src/Components/Label.tsx
touch src/Components/Texto.tsx
touch src/Components/Paragrafo.tsx

# ============================================
# COMPONENTES - LAYOUT
# ============================================
touch src/Components/Container.tsx
touch src/Components/Grid.tsx
touch src/Components/Row.tsx
touch src/Components/Col.tsx
touch src/Components/Section.tsx

# ============================================
# COMPONENTES - FEEDBACK
# ============================================
touch src/Components/Spinner.tsx
touch src/Components/Skeleton.tsx
touch src/Components/Alert.tsx
touch src/Components/Toast.tsx
touch src/Components/Modal.tsx
touch src/Components/Tooltip.tsx
touch src/Components/ProgressBar.tsx

# ============================================
# COMPONENTES - TABELAS
# ============================================
touch src/Components/Tabela.tsx
touch src/Components/TabelaUsuario.tsx

# ============================================
# TELAS (SCREEN)
# ============================================
touch src/Screen/Home.tsx
touch src/Screen/TelaLogin.tsx
touch src/Screen/TelaCadastro.tsx
touch src/Screen/TelaQr.tsx
touch src/Screen/TelaVerificacao2FA.tsx
touch src/Screen/Dashboard.tsx
touch src/Screen/PainelAdmin.tsx
touch src/Screen/Configuracoes.tsx
touch src/Screen/Perfil.tsx
touch src/Screen/Relatorios.tsx
touch src/Screen/Alertas.tsx
touch src/Screen/RecuperarSenha.tsx
touch src/Screen/Tela404.tsx

# ============================================
# HOOKS
# ============================================
touch src/Hooks/useAuth.ts
touch src/Hooks/useApi.ts
touch src/Hooks/useForm.ts
touch src/Hooks/useModal.ts
touch src/Hooks/useToast.ts
touch src/Hooks/useFetch.ts

# ============================================
# SERVICES
# ============================================
touch src/Services/api.ts
touch src/Services/authService.ts

# ============================================
# UTILS
# ============================================
touch src/Utils/validators.ts
touch src/Utils/formatters.ts
touch src/Utils/constants.ts
