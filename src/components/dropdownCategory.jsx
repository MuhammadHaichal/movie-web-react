import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Dropdown from "react-bootstrap/Dropdown"

const dropDownCategory = ({
    title,
    subtitle,
    handler,
    category,
    buttonName,
}) => {
    return (
        <div>
            <Row
                direction="horizontal"
                className="justify-content-start align-items-center"
            >
                <Col xs={3}>
                    <h1 className="text-left">{title}</h1>
                </Col>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle
                            variant="warning"
                            id="dropdown-basic"
                            className="px-4"
                        >
                            {buttonName}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {category.map((value) => (
                                <Dropdown.Item key={value.id}>
                                    <Button
                                        variant="warning"
                                        onClick={() =>
                                            handler(
                                                `${value.keys}`,
                                                `${value.title}`
                                            )
                                        }
                                    >
                                        {value.title}
                                    </Button>
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            <div>
                <p className="text-left">{subtitle}</p>
            </div>
        </div>
    )
}

export default dropDownCategory
