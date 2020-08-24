
const defaultError = () => {
    return {
        ok: false,
        error: {
            message: 'Error no controlado.'
        }
    }
}

const badRequest = () => {
    return {
        ok: false,
        error: {
            message: 'Hacen falta datos por ingresar / Datos ingresados no válidos.'
        }
    }
}

const error = (message: string = 'Error no controlado', especific: any = null) => {
    return {
        ok: false,
        error: {
            message,
            especific
        }
    }
}

export default { defaultError, badRequest, error }