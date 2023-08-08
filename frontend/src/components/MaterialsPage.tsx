import Categories from "./blocks/materialsPage/Categories";
import './../assets/scss/materialsPage.scss'
import Materials from "./blocks/materialsPage/Materials";

const MaterialsPage = () => {
    return (
        <div className="materials-page padding w-100 d-flex flex-column gap-sm-5">
            <Categories />
            <Materials />
        </div>
    )
}

export default  MaterialsPage