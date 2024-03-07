import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { COMPONENTS } from "../../../utils/components";
import Card from "../../common/Card/Card";
import { useEffect, useState } from "react";
import { GridIcon, SearchIcon } from "../../../assets/icons/icons";

const ParentComponent = () => {
    const { parentId } = useParams();
    const component = COMPONENTS.filter(item => item.id === parentId)[0];

    const [viewType, setViewType] = useState("GRID");
    const [data, setData] = useState(component.childrens);
    const [search, setSearch] = useState("");
    useEffect(() => {
        setData(
            component.childrens.filter(item => item.title.toLowerCase().includes(search.toLowerCase()) || item.description?.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search])

    return (
        <div className="homepage">
            <Container>
                <div className="header">
                    <h2>{component.title}</h2>
                    <div className="action">
                        <div className="search">
                            <SearchIcon />
                            <input
                                type="search"
                                placeholder="Search"
                                onChange={e => setSearch(e.target.value)}
                                value={search}
                            />
                        </div>
                        <button onClick={() => setViewType("GRID")} className={viewType === "GRID" ? "active" : ""}>
                            <GridIcon />
                        </button>
                    </div>
                </div>
                <Row>
                    {
                        data &&
                        data.map(item => {
                            return (
                                <Col md={4} key={item.id}>
                                    <Card
                                        title={item.title}
                                        description={item.description}
                                        to={`/${parentId}/${item.id}`}
                                        preview={item.preview}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default ParentComponent
