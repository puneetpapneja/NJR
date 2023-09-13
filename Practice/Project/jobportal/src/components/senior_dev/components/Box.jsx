import Table from 'react-bootstrap/Table';

function DarkExample() {
  const details = [
    {
      id: 1,
      Candidate: 'Arjun Puri',
      Email: 'Arjupuri@gmail.com',
      Contact_Number: '1289347650',
      Applied_Date: '12/Aug/2023',
      Resume: 'File'
    },
    {
      id: 2,
      Candidate: 'Mira Sharma',
      Email: 'Mira123@gmail.com',
      Contact_Number: '9876543210',
      Applied_Date: '15/Aug/2023',
      Resume: 'File'
    },
    {
      id: 3,
      Candidate: 'Raj Patel',
      Email: 'RajP@gmail.com',
      Contact_Number: '7654321098',
      Applied_Date: '18/Aug/2023',
      Resume: 'File'
    },
    {
      id: 4,
      Candidate: 'Sara Khan',
      Email: 'Sara456@gmail.com',
      Contact_Number: '8765432109',
      Applied_Date: '20/Aug/2023',
      Resume: 'File'
    },
    {
      id: 5,
      Candidate: 'Amit Gupta',
      Email: 'AmitG@gmail.com',
      Contact_Number: '9876012345',
      Applied_Date: '22/Aug/2023',
      Resume: 'File'
    },
    {
      id: 6,
      Candidate: 'Priya Verma',
      Email: 'PriyaV@gmail.com',
      Contact_Number: '8765123450',
      Applied_Date: '25/Aug/2023',
      Resume: 'File'
    }
  ];
  

  return (
    <Table striped bordered hover style={{margin: '3% 10%',width:'80%'}}>
      <thead>
        <tr>
          <th>Candidate</th>
          <th>Email</th>
          <th>Contact Number</th>
          <th>Applied Date</th>
          <th>Resume(CV)</th>
        </tr>
      </thead>
      <tbody>
        {details.map((e)=>(
          <tr key={e.id}>
          <td>{e.Candidate}</td>
          <td>{e.Email}</td>
          <td>{e.Contact_Number}</td>
          <td>{e.Applied_Date}</td>
          <td>{e.Resume}</td>
        </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DarkExample;