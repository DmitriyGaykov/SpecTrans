export default interface User {
    _id: string,
    name: string,
    password: string,
    img: string
}

export const userMapper = (user : User) => {
    return user ? {
        ...user,
        _id: user._id
    } as User  : undefined
}

export const userToFormData = (user : User, img: File) => {
    const formData = new FormData()

    formData.set('name', user.name)
    formData.set('password', user.password)
    formData.set('img', img)

    return formData
}

export const isGettedUser = (user : User) => {
    return user._id !== ""
}