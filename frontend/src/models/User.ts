export default interface User{
    _id: string,
    name: string,
    password: string,
    img: string,
    role: string
}

export const userMapper = (user : any) => {
    return user ? {
        ...user,
        _id: user?._id,
        role: user?.role?.role
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
    return user && user._id !== ""
}

export const equalsUser = (user1 : User, user2 : User) => {
    return user1?._id === user2?._id
}