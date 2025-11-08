import { ExpresionRegular } from "./expresionesRegulares.js";

const expresionRegular = new ExpresionRegular();

export class Validaciones {
    correo(correo) {
        return expresionRegular.correo.test(correo);
    }

    contrasenia(contrasenia) {
        return expresionRegular.contrasenia.test(contrasenia);
    }

    contrasenias_iguales(contrasenia, repetir_contrasenia) {
        return contrasenia == repetir_contrasenia;
    }

    usuario_existente(correo, lista_usuarios) {
        return lista_usuarios.some(usuario => usuario.correo === correo);
    }
}