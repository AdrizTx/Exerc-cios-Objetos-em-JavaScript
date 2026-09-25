//################################################################
//EXERCICO - 01
//################################################################

let usuario = {
    login: "admin",
    senha: 1234,
    tipo: "administrador"
};

console.log("O login do " + usuario.tipo + " é " + usuario.login + " e a senha é " + usuario.senha + ", muito fraca por sinal.");

//################################################################
//EXERCICO - 02
//################################################################

let aluno = {
    nome: "Lucas",
    curso: "Desenvolvimento de Sistemas",
    turma: "2°DS"
};

console.log("O aluno " + aluno.nome + " está matriculado no curso de " + aluno.curso + ", na turma " + aluno.turma + ".");

//################################################################
//EXERCICO - 03
//################################################################

let professor = {
    nome: "Carlos",
    disciplina: "JavaScript",
    turno: "manhã"
}

console.log("O professor " + professor.nome + " ministra a disciplina de " + professor.disciplina + " no turno da " + professor.turno + ".");

//################################################################
//EXERCICO - 04
//################################################################

let empresa = {
    nome: "Tech Solutions",
    area: "Tecnologia",
    cidade: "Fortaleza"
}

console.log("A emoresa " + empresa.nome + " atua na área de " + empresa.area + " e fica em " + empresa.cidade + ".");

//################################################################
//EXERCICO - 05
//################################################################

let computador = {
    marca: "Dell",
    processador: "intel i5",
    memoria: "8GB"
}

console.log("O computador " + computador.marca + " possui processador " + computador.processador + " e memoria de " + computador.memoria + ".");

//################################################################
//EXERCICO - 06
//################################################################

let livro = {
    titulo: "JavaScript Básico",
    autor: "Ana Silva",
    paginas: 200
}

console.log("O livro " + livro.titulo + " foi escrito por " + livro.autor + " e possui " + livro.paginas + ".");

//################################################################
//EXERCICO - 07
//################################################################

let filme = {
    nome: "Matrix",
    genero: "Ficção",
    ano: 1999
}

console.log("O filme " + filme.nome + " é do genero " + filme.genero + " e foi lançado em " + filme.ano + ".");

//################################################################
//EXERCICO - 08
//################################################################

let jogo = {
    nome: "Minecraft",
    plataforma: "PC",
    genero: "SandBox"
}

console.log("O jogo " + jogo.nome + " roda na plataforma " + jogo.plataforma + " e pertence ao gênero " + jogo.genero + ".");

//################################################################
//EXERCICO - 9
//################################################################

let escola = {
    nome: "EEEP",
    cidade: "Fortaleza",
    turno: "manhã"
}

console.log("A escola " + escola.nome + " funciona na cidade de " + escola.cidade + " no turno da " + escola.turno + " .");

//################################################################
//EXERCICO - 10
//################################################################

let conta = {
    usuario: "Eduardo",
    senha: 1234,
    nome: "Eduardo Silva",
    email: "eduardo@email.com",
    nivel: "administrador",
    curso: "Desenvolvimento de Sistemas",
    turma: "DS 2",
    idade: 18
};

console.log(conta);
console.log("O usuário " + conta.usuario + ", de " + conta.idade + " idade, está matriculado no curso de " + conta.curso + ", turma "  + conta.turma + ". Seu nível de acesso é " + conta.nivel + " e seu e-mail é " + conta.email + ". A senha cadastrada é "  + conta.senha + ".");