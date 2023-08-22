import { Col, Row, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
export default function developer(){
    return(
        <Container>
             <Row>
                    <Col lg="1"></Col>
                    <Col lg="10">
                        <h1 style={{textAlign:"center"}}>Senior Developer(4536)</h1>
                    </Col>
                </Row>
                 <Table striped="columns">
      <thead>
        <tr>
          <th>Candidates</th>
          <th>Email</th>
          <th>Contact Number</th>
          <th>Applied date</th>
          <th>File</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Arjun puri</td>
          <td>arjunpuri@gmail.com</td>
          <td>1234567890</td>
          <td>12/04/2023</td>
          <td>File</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>jacob@gmail.com</td>
          <td>5/03/2023</td>
          <td>9876543210</td>
          <td>File</td>
        </tr>
        <tr>

           <td>Puneet</td>
          <td>ouneet@gmail.com</td>
          <td>7418529630</td>
          <td>28/06/2023</td>
          <td>File</td>
        </tr>
         <tr>

           <td>Lavisha</td>
          <td>lavisha@gmail.com</td>
          <td>9632587410</td>
          <td>2/01/2023</td>
          <td>File</td>
        </tr>
      </tbody>
    </Table>
        </Container>
    )
}