import { defineConfig } from "drizzle-kit";
import * as dotenv from 'dotenv'; // Importa dotenv para carregar variáveis de ambiente

// Carrega as variáveis de ambiente do arquivo .env
// Isso é crucial para que o drizzle-kit (que é uma ferramenta de CLI)
// consiga acessar DATABASE_URL e JWT_SECRET, mesmo quando executado fora do servidor principal.
dotenv.config({ path: '.env' });

// Sua verificação de segurança é excelente, vamos mantê-la.
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL não está definida. Certifique-se de que o banco de dados está provisionado e a variável está no seu arquivo .env");
}

export default defineConfig({
  // ONDE SUAS DEFINIÇÕES DE SCHEMA DO DRIZZLE ESTÃO:
  // A correção mais importante. Seus modelos Drizzle ORM (com pgTable)
  // estão em 'src/models'. O arquivo 'shared/schema.ts' contém schemas Zod,
  // não as definições de tabela do Drizzle.
  schema: "./src/models",

  // DIRETÓRIO DE SAÍDA PARA AS MIGRAÇÕES:
  // Mantive o seu caminho mais específico, que é uma boa prática.
  out: "./drizzle/migrations",

  // DIALETO DO BANCO DE DADOS:
  // 'postgresql' é o dialeto correto para o Drizzle ORM.
  dialect: "postgresql",

  // CREDENCIAIS DO BANCO DE DADOS:
  // Permanece como está, lendo da variável de ambiente.
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },

  // OPÇÕES ADICIONAIS (Recomendadas para desenvolvimento):
  // verbose: true - Fornece mais detalhes sobre o que o drizzle-kit está fazendo.
  // strict: true - Ativa validações mais rigorosas do schema.
  verbose: true,
  strict: true,
});