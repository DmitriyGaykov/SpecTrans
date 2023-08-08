import Material from "../../../models/Material";

export type MaterialBlockType = {
    material : Material
}

const MaterialBlock = ({ material } : MaterialBlockType ) => {
    console.log(material)
    return (
        <div className="material w-100 d-flex flex-column align-items-start justify-content-start gap-2">
            <img src={material.img} alt="" className="material-img figure-img"/>
            <div className="container d-flex flex-column gap-4">
                <div className="name-and-date d-flex justify-content-between">
                    <h1 className="h1 name"> {material.name} </h1>
                    <span>{ material.datePublish.toLocaleDateString() }</span>
                </div>
                <div className="desc w-100 text-break" dangerouslySetInnerHTML={{__html: material.description }}/>
            </div>
            <div className="d-flex gap-lg-5 align-items-center">
                <span className="text-black-50 container">Цена: <span className="text-success fw-bold" >{ material.price }</span> руб.</span>
                <button className="btn btn-success">Заказать</button>
            </div>
            <hr className="w-100"/>
        </div>
    )
}

export default MaterialBlock