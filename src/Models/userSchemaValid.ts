import * as Yup from 'yup'


const MINIMUMLENTGH = {
    nom : 4,
    motDePasse : 8
}

const MAXIMUMLENTGH = {
    nom : 25,
    motDePasse : 30
}

export const addUserSchemeValidator = {
    schema : {
        body : {
            yupSchema : Yup.object().shape({
                nom : Yup.string().min(MINIMUMLENTGH.nom).max(MAXIMUMLENTGH.nom).required(),
                motDePasse : Yup.string().min(MINIMUMLENTGH.motDePasse).max(MAXIMUMLENTGH.motDePasse).required()
            })
        }
    }
}