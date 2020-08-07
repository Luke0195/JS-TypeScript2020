## Como instalar dependências no Node

# npm install (nome da dependencias)
 Isso significa que nossa dependência será usada em produção.
 O símbolo de ^ antes do numero da versão significa que a mesma pode ser atualizada

# Quero usar uma dependência que nunca seje atualizada
 npm install (nome da lib ) -E

# Utilizar uma dependência em desenvolvimento 
 npm install (nome da lib) --save-dev

# Utilizar a dependência que estava em desenv para produção
 npm install (nome da lib) --save-prod

# Utilizando uma dependência especifica.
  npm install express@2.1.0

# Atualizando uma lib para a ultima versão especifica
 npm  install (nome da lib)@(numero da versão)
 Esse comando atualiza as versões minor e patch.


# Verificar os pacotes desatualizados
npm outdated

# Comando para desinstalar um pacote
npm unistall (nome do pacote)