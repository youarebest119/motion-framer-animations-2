import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GridIcon, SearchIcon } from "../../../assets/icons/icons";
import { COMPONENTS } from "../../../utils/components";
import Card from "../../common/Card/Card";
import "./Homepage.scss";

const Homepage = () => {
    const [viewType, setViewType] = useState("GRID");
    const [data, setData] = useState(COMPONENTS);
    const [search, setSearch] = useState("");
    useEffect(() => {
        setData(
            COMPONENTS.filter(item => item.title.toLowerCase().includes(search.toLowerCase()) || item.description?.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search])
    return (
        <div className="homepage">
            <Container>
                <div className="header">
                    <h2>Components</h2>
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
                <div className="content">
                    <Row>
                        {
                            data.map(item => {
                                return (
                                    <Col md={4} key={item.id}>
                                        <Card
                                            title={item.title}
                                            disabled={!(item.childrens.length > 0)}
                                            to={`/${item.id}`}
                                            description={item.description}
                                        />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Homepage
