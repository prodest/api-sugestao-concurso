#language: pt

Funcionalidade: Sugestao

Cenário: O usuário deseja saber quais os órgãos possuem correlação com o que está informando

Dado que foi informado um orgao
Quando eu pesquisar no banco
Então devo retornar o resultado contendo os orgaos correlacionados

# Cenário: O usuário envie uma lista vazia, ou seja, sem cargo algum

# Dado que foi informado uma lista de cargos vazia
# Quando eu pesquisar o cargo no banco
# Então devo retornar uma lista vazia