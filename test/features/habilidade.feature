#language: pt

Funcionalidade: Habilidade

Cenário: O usuário deseja saber quem possui a(s) habilidade(s) referentes a um ou mais cargo(s)

Dado que foi informado uma lista de cargos
Quando eu pesquisar cada cargo no banco
Então devo retornar o resultado contendo o cpf dos candidatos que possuem o cargo

Cenário: O usuário envie uma lista vazia, ou seja, sem cargo algum

Dado que foi informado uma lista de cargos vazia
Quando eu pesquisar o cargo no banco
Então devo retornar uma lista vazia