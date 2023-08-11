import User, {userMapper} from "./User";
import Category from "./Category";

export default interface Material {
    _id : string,
    name : string,
    description : string,
    price : number,
    img : string,
    category: Category,
    datePublish : Date,
    user?: User
}

export const materialMapper = (obj : any) => {
    try {
        const material : Material = {
            _id: obj._id,
            name: obj.name,
            description: obj.description,
            price: obj.price,
            img: obj.img,
            category: { ...obj.categoryId },
            datePublish: new Date(obj.datePublish),
            user: userMapper(obj.userId)
        }

        return material
    } catch (e) {
        return undefined
    }
}

export const materialToFormData = (material : Material, img?: File) => {
    const fdata = new FormData()

    Object.keys(material).forEach(key => {
        fdata.set(key, (material as any)[key])
    })

    if(img != null) {
        fdata.append('img', img)
    }

    return fdata
}