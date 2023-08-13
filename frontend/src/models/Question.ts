export default interface Question {
    _id: string,
    name: string,
    phone: string,
    comment: string
}

export const getDefaultQuestion = () : Question => {
    return {
        _id: "",
        name: "",
        phone: "",
        comment: ""
    }
}

export const questionToFormData = (question : Question) : FormData => {
    const formData = new FormData()

    Object.keys(question).forEach(key => {
        formData.set(key, (question as any)[key] || "")
    })

    return formData
}