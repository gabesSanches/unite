
let participantes = [
    {
        nome: "Gabriel Sanches",
        email: "gabriel.sanches1297@gmail.com",
        dataInscricao: new Date(2024, 2, 22, 19, 20),
        dataCheckIn: new Date(2024, 2, 25, 22, 0) 
    },
    {
        nome: "Ana Oliveira",
        email: "ana.oliveira1989@hotmail.com",
        dataInscricao: new Date(2023, 5, 23, 14, 30),
        dataCheckIn: null
    },
    {
        nome: "Carlos Santos",
        email: "carlos.santos@gmail.com",
        dataInscricao: new Date(2023, 9, 24, 10, 15),
        dataCheckIn: new Date(2024, 1, 25, 21, 0) 
    },
    {
        nome: "Mariana Costa",
        email: "mariana.costa@outlook.com",
        dataInscricao: new Date(2024, 2, 21, 16, 45),
        dataCheckIn: new Date(2023, 8, 25, 23, 0) 
    },
    {
        nome: "Ricardo Pereira",
        email: "ricardo.pereira@yahoo.com",
        dataInscricao: new Date(2024, 0, 20, 9, 0),
        dataCheckIn: new Date(2023, 9, 25, 19, 0) 
    },
    {
        nome: "Beatriz Almeida",
        email: "beatriz.almeida@gmail.com",
        dataInscricao: new Date(2023, 11, 18, 13, 25),
        dataCheckIn: null
    },
    {
        nome: "Felipe Nunes",
        email: "felipe.nunes@hotmail.com",
        dataInscricao: new Date(2023, 5, 17, 11, 35),
        dataCheckIn: new Date(2023, 11, 25, 17, 0) 
    },
    {
        nome: "Larissa Rocha",
        email: "larissa.rocha@gmail.com",
        dataInscricao: new Date(2024, 2, 19, 15, 50),
        dataCheckIn: new Date(2024, 1, 25, 16, 0) 
    },
    {
        nome: "Thiago Lima",
        email: "thiago.lima@outlook.com",
        dataInscricao: new Date(2024, 2, 22, 17, 10),
        dataCheckIn: null
    },
    {
        nome: "Juliana Fernandes",
        email: "juliana.fernandes@gmail.com",
        dataInscricao: new Date(2023, 7, 25, 12, 0),
        dataCheckIn: null
    }
];


const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
    let dataCheckIn =dayjs(Date.now()).to(participante.dataCheckIn)

if(participante.dataCheckIn == null) {
dataCheckIn =  `
    <button 
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
    >

    Confirmar check-in

    </button>   
`

}


    return ` 
<tr>
    <td>
        <strong>
            ${participante.nome}
            </strong>
            <br>
            <small>
             ${participante.email}
            </small>
        </td>
        <td>${dataInscricao}</td>
        <td>${dataCheckIn}</td>
    </tr>
`

}


const refreshList = (participantes) => {
    let output = ""

    for(let participante of participantes){
        output = output + criarNovoParticipante(participante)
    }

document.querySelector('tbody').innerHTML = output
}

refreshList(participantes)

const adicionarParticipante = (event) =>{
    event.preventDefault()

    const dadosDoFormulario = new FormData(event.target)

    const participante = {
        nome: dadosDoFormulario.get('nome'),
        email: dadosDoFormulario.get('email'),
        dataInscricao: new Date(),
        dataCheckIn: null
    }

const participanteExiste = participantes.find((p) => p.email == participante.email

)

if(participanteExiste) {
    alert('Email já cadastrado!')
    return
}


    participantes = [participante, ...participantes]
    refreshList(participantes)


    event.target.querySelector('[name="nome"]').value = ""
    event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {

    const mensagemConfirmacao = 'Tem certeza que deseja realizar o check-in?'

    if(confirm(mensagemConfirmacao) == false) {
        return
    }

    

    const participante = participantes.find((p) => {
        return p.email ==event.target.dataset.email
    })

    participante.dataCheckIn = new Date()

    refreshList(participantes)
    
}

