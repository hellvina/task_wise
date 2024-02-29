<div id="top"></div>

<br />
<div align="center">
  <h1 align="center">taskwise</h1>

  <h3 align="center">
    API Repositorios Github
    <br />
  </h3>

  [![PHP][PHP]][PHP]
  [![Laravel][Laravel]][Laravel]
  [![MySQL][MySQL]][MySQL]
  [![Angular][Angular]][Angular]
</div>

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Ambiente de desenvolvimento](#ambiente-de-desenvolvimento)
    - [Plugins e dependências](#plugins-e-dependência)
    - [Configuração](#configuração)
- [Testando API](#testando-a-api)



<!-- ABOUT -->
## Sobre o Projeto

É uma API construída com o framework Laravel, consumida por um client webapp **responsivo** que  renderiza uma interface para **gerenciamento de tarefas**.



<p align="right">(<a href="#top">back to top</a>)</p>


## Ambiente de desenvolvimento

### Plugins e dependências

- [PHP](https://www.php.net/)
- [Laravel](https://laravel.com/)
- [MySQL](https://dev.mysql.com)
- [Angular](https://angular.io/)

Para facilitar a instalacao de dependencias recomendo fortemente a ferramenta: [ASDF](https://asdf-vm.com).


<p align="right">(<a href="#top">back to top</a>)</p>


### Configuração

1.  Se você  está usando uma os Debian/Ubuntu based básica talvez precise instalar a biblioteca `base-devel` para instalar as dependências básicas para instalar o ruby e `libpq` e\ou `libpq-dev` que a gem [pg](https://github.com/ged/ruby-pg/) precisa como pré-requisito. Para Debian ou Ubuntu:
```sh
sudo apt install composer
```

```sh
sudo apt install php-mbstring php-xml php-bcmath php-curl
```
3. Uma vez instalada as dependencias, voce pode executar o servidor.

4. Rode o comando `cd service-api && php artisan  serve` para iniciar o serviço


<p align="right">(<a href="#top">back to top</a>)</p>


## Testando a API

### POST: /signup

#### Criando um novo usuário

##### Parametros


> | name   |  type      | data type      | 
> |--------|------------|----------------|
> | `name` |  required  | string         | 
> | `email` |  required  | string        | 
> | `password` |  required  | string     |

<img src="https://i.imgur.com/P2CbdwJ.gif" width="400">

### POST: /signin

#### Logando 


##### Header 
Use o token gerado no retorno do singup:
```sh
 Authorization: Bearer <token-aqui>
```

##### Parametros


> | name   |  type      | data type      | 
> |--------|------------|----------------|
> | `email` |  required  | string        | 
> | `password` |  required  | string     | 

<img src="https://i.imgur.com/NdibKB2.gif" width="400">

### POST: /tasks

#### Criar uma task 


##### Header 
Use o token gerado no retorno do singup:
```sh
 Authorization: Bearer <token-aqui>
```

##### Parametros


> | name   |  type      | data type      | 
> |--------|------------|----------------|
> | `description` |  required  | string  | 
> | `status` |  required  | string       |
> | `user_id` |  required  | number      |

 <img src="https://i.imgur.com/hEgqwml.gif" width="400">

 ### GET: /tasks

#### Indexar tarefas por usuário


##### Header 
Use o token gerado no retorno do singup:
```sh
 Authorization: Bearer <token-aqui>
```

##### Parametros


> | name   |  type      | data type      | 
> |--------|------------|----------------|
> | `user_id` |  required  | string  |

 <img src="https://i.imgur.com/t7v4Gxt.gif" width="400">

 ### GET: /tasks/:id

#### Mostrar tarefa


##### Header 
Use o token gerado no retorno do singup:
```sh
 Authorization: Bearer <token-aqui>
```

 ### GET: /tasks/:id

#### Atualizar tarefa


##### Header 
Use o token gerado no retorno do singup:
```sh
 Authorization: Bearer <token-aqui>
```

##### Parametros


> | name   |  type      | data type      | 
> |--------|------------|----------------|
> | `description` |  required  | string  |
> | `title` |  required  | string  |
> | `status` |  required  | string  |

 <img src="https://i.imgur.com/d3zpdTi.gif" width="400">

 ### DELETE: /tasks/:id

#### Deletar tarefa


##### Header 
Use o token gerado no retorno do singup:
```sh
 Authorization: Bearer <token-aqui>
```


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- How to make badge shields https://shields.io/ -->
[PHP]: https://img.shields.io/badge/php-blue?style=for-the-badge&logo=php&logoColor=white
[Laravel]: https://img.shields.io/badge/laravel-red?style=for-the-badge&logo=laravel&logoColor=white
[MySQL]: https://img.shields.io/badge/MySQL-316192?style=for-the-badge&logo=mysql&logoColor=white
[Angular]: https://img.shields.io/badge/Angular-red?style=for-the-badge&logo=angular
