export class ExpresionRegular {
    correo = /^[\w.-]+@[a-zA-Z\d.-]+\.com$/;
    contrasenia = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
}