import { Container,Row,Col,Ratio } from "react-bootstrap";
const Square=(props)=>{
    return (
      <Container className="p-4">
            <Row>
                  <h4 className="text-white text-center align-middle">{props.value}</h4>
                  <p className="text-white text-center">{props.title}</p>
            </Row>
      </Container>


    // <>

    //     <Ratio key='1*1' aspectRatio='1*1'>
    //       <div>ehehw</div>
    //     </Ratio>
      
    // </>
  );
}
  
  export default Square;