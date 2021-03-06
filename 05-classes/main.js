class Ponto {
    constructor(nome, posX, posY) {
        this.nome = nome
        this.x = posX
        this.y = posY
    }

    mover_horizontalmente(distancia) {
        this.x += distancia
        return this.x
    }

    mover_verticalmente(distancia) {
        this.y += distancia
        return this.y
    }

    mover(distanciaX, distanciaY) {
        this.x += distanciaX
        this.y += distanciaY
        return [ this.x, this.y ]
    }

    distancia_entre_dois_pontos(outro_ponto) {
        const x1 = this.x
        const y1 = this.y
        const x2 = outro_ponto.x
        const y2 = outro_ponto.y
        return Math.sqrt( ( Math.abs( x1 - x2 ) ) ** 2 + ( Math.abs( y1 - y2 ) ) ** 2 )
    }
}

class Div extends Ponto {
    constructor(nome, cor, posX, posY, altura, largura) {
        super(nome, posX, posY)

        this.cor = cor
        this.altura = altura
        this.largura = largura
    }

    desenhar() {
        const body = document.querySelector("body")
        this.node = document.createElement("div")
        this.node.style.width = this.largura + "px"
        this.node.style.height = this.altura + "px"
        this.node.style.backgroundColor = this.cor
        this.node.style.top = this.y + "px"
        this.node.style.left = this.x + "px"
        body.appendChild(this.node)
    }

    mover_desenho(){
        this.node.style.top = this.y + "px"
        this.node.style.left = this.x + "px"
    }
}

const circulo1 = new Div ("circulo1" , "#000" , 300 , 300, 25, 25)
// const circulo2 = new Div ("circulo2", "blue", 100, 50, 80, 80)

circulo1.desenhar()
const gif = document.querySelector(".dolo_img")


document.addEventListener('keydown', function (event){

    if(event.key == "ArrowUp"){
        circulo1.mover_verticalmente(-5)
    } else if (event.key == "ArrowDown") {
        circulo1.mover_verticalmente(5)
    } else if (event.key == "ArrowLeft") {
        circulo1.mover_horizontalmente(-5)
    } else if (event.key == "ArrowRight") {
        circulo1.mover_horizontalmente(5)
    }
        circulo1.mover_desenho()

    if (circulo1.y == 300 && circulo1.x == 660 ) { 
        console.log(circulo1.x)
            gif.style.display = "block"
    }
})



