class Person {
    constructor(nombre, apellido, edad, sexo, intereses) {
        this.name = {nombre, apellido};
        this.edad = edad;
        this.sexo = sexo;
        this.intereses = intereses;
    }

    bio() {
        let string = '';
        let pronoun;

        if (this.sexo === 'Hombre') {
            pronoun = 'A el le gusta ';
        } else if (this.sexo === 'Mujer') {
            pronoun = 'A ella le gusta ';
        }

        string += pronoun;

        if (this.intereses.length === 1) {
            string += this.intereses[0] + '.';
        } else if (this.intereses.length === 2) {
            string += this.intereses[0] + ' y ' + this.intereses[1] + '.';
        } else {

            for (let i = 0; i < this.intereses.length; i++) {
                if (i === this.intereses.length - 1) {
                    string += 'y ' + this.intereses[i] + '.';
                } else {
                    string += this.intereses[i] + ', ';
                }
            }
        }

        return(string);
    }
    greeting() {
        let personName = this.name.nombre;
        alert(`Hola! yo soy ${personName}.`);
    }
}

function CreatePerson (name, apellido, edad, sexo, intereses) {
    intereses = intereses.split("\n")
    let persona = new Person(name, apellido, edad, sexo, intereses);
    return persona;
}

function CreateBio (persona) {

    const html = `
    <article class="bio-section">
        <p><strong>Nombre:</strong> <span id="name"></span></p>
        <p><strong>Edad:</strong> <span id="edad"></span></p>
        <p><strong>Sexo:</strong> <span id="sexo"></span></p>
        <p><strong>Intereses:</strong> <span id="intereses"></span></p>
    </article><br>
    `

    $(html).appendTo("#bio-display");
    let intereses = persona.bio()
    $('span#name').last()
        .html(`${persona.name.nombre} ${persona.name.apellido}`)
        .click(() => {persona.greeting()});
    $('span#edad').last().html(persona.edad);
    $('span#sexo').last().html(persona.sexo);
    $('span#intereses').last().html(intereses);
}

function main () {
    $('#submit').click( () => {
        let name = $('#guest-first-name').val();
        let apellido = $('#guest-last-name').val();
        let edad = $('#guest-age').val();
        let sexo = $('#guest-gender').val()
        let intereses = $('#guest-interests').val();
        if (name && apellido && edad && intereses) {
            let persona = CreatePerson(name, apellido, edad, sexo, intereses);
            CreateBio(persona);
            $('#guest-form')[0].reset();
        } else {
            alert("Favor de llenar los campos!");
        }
    });
}

// Start code within page
$(document).ready( () => {
    main();
});
