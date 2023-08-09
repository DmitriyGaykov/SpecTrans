import Cookie from 'universal-cookie'

export const addCookie = (name: string, value: string, option: any = {
    expires: addDay(new Date(), 7)
}) => {
    const cookie = new Cookie()
    cookie.set(name, value, option)
}

export const getCookie = (name : string) : string | undefined => {
    const cookie = new Cookie()
    return cookie.get(name)
}

export const removeCookie = (name : string) =>{
    const cookie = new Cookie()
    cookie.remove(name)
}

export const addDay = (date : Date, cday : number) : Date => {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + 7)
    return newDate
}