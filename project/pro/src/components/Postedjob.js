import { Container, Row } from "react-bootstrap";
import PostedStructure from "./PostedStructure";

export default function PostedJob(){
    return(
        <Container>
            <Row className="my-3 ms-5"><h1 style={{fontSize:"3em"}}>Posted Job</h1></Row>
            <Row>
                <PostedStructure Title="Senior developer" Subtitle="KP developers" veiws="8" description="lorem ipsum set aamet dolores"/>
                <PostedStructure Title="Senior developer" Subtitle="KP developers" veiws="8" description="lorem ipsum set aamet dolores"/>
                <PostedStructure Title="Senior developer" Subtitle="KP developers" veiws="8" description="lorem ipsum set aamet dolores"/>
            </Row>
        </Container>
    );
}