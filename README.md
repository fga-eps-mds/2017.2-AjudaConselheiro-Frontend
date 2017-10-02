# Ajuda Conselheiro

![travis](https://travis-ci.org/fga-gpp-mds/2017.2-AjudaConselheiro-Frontend.svg?branch=development)

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


O Ajuda Conselheiro é um sistema web que é direcionado para o Conselho de Alimentação Escolar (CAE) e foi inicialmente planejado pelo Tribunal de Contas da União (TCU), com o principal objetivo auxiliar os conselheiros a realizarem um melhor acompanhamento durante as realizações das visitas nas escolas.  

# Guia de instalação

Primeiramente certifique-se que tenha instalado o angular-cli. Se você é usuário do sistema operacional Linux só digitar:
```
npm install -g @angular/cli
```
Também será necessário a instalação do Docker, caso queira usá-lo só seguir o tutorial abaixo:

![Instalação do Docker](https://www.digitalocean.com/community/tutorials/como-instalar-e-usar-o-docker-no-ubuntu-16-04-pt)

## Build docker image

```
$ docker build -t ajudaconselheiro .
```

## Run the container

```
$ docker run -d -p 8080:80 ajudaconselheiro
```

## Navigation

Navigate to the app in http://localhost:8080

## Pincipais funcionalidades desenvolvidas ate o momento
- Manter Conselheiro
- Manter Agendamento
- Manter Checklist

## Licença
![GNU General Public License v3.0](https://github.com/fga-gpp-mds/2017.2-AjudaConselheiro-Frontend/blob/development/LICENSE)
