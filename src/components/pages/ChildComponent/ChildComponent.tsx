import { useLocation, useParams } from "react-router-dom"
import { COMPONENTS } from "../../../utils/components";
import PreRequisites from "../../common/PreRequisites/PreRequisites";

const ChildComponent = () => {
    const { parentId, childId } = useParams();
    const Object = COMPONENTS.filter(item => item.id === parentId)[0] &&
        COMPONENTS.filter(item => item.id === parentId)[0].childrens.filter(item => item.id === childId)[0] &&
        COMPONENTS.filter(item => item.id === parentId)[0].childrens.filter(item => item.id === childId)[0];
    const { hash } = useLocation();
    return (
        <>
            {
                hash !== "#remove-helper" &&
                <PreRequisites
                    packages={Object.prerequisites.packages}
                />
            }
            {
                Object &&
                    Object.component ?
                    <Object.component />
                    : "Not Found"
            }
        </>
    )
}

export default ChildComponent
