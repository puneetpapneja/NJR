import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function SearchResults() {
  const headings = [
    "Candidates",
    "Email",
    "Contact Number",
    "Applied Date",
    "Resume(CV)",
  ];
  const candidateData = [
    {
      id: 1,
      candidate: "John Doe",
      email: "john@example.com",
      contactNumber: "123-456-7890",
      appliedDate: "2023-08-18",
      resumeType: "PDF",
    },
    {
      id: 2,
      candidate: "Jane Smith",
      email: "jane@example.com",
      contactNumber: "987-654-3210",
      appliedDate: "2023-08-17",
      resumeType: "Word",
    },
    {
      id: 3,
      candidate: "Alice Johnson",
      email: "alice@example.com",
      contactNumber: "555-555-5555",
      appliedDate: "2023-08-16",
      resumeType: "PDF",
    },
  ];
  return (
    <Container>
      <h6 style={{ fontSize: "3rem", marginBottom: "4%" }}>
        <b>Software Engineering</b>
      </h6>
      <Table responsive>
        <thead>
          <tr>
            {headings.map((header, index) => (
              <th key={index} className="p-4">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {candidateData.map((candidate) => (
            <tr
              key={candidate.id}
              //   style={{ backgroundColor: index % 2 === 0 ? "#FFF" : "#FAFAFA" }}
            >
              <td className="p-4">{candidate.candidate}</td>
              <td className="p-4">{candidate.email}</td>
              <td className="p-4">{candidate.contactNumber}</td>
              <td className="p-4">{candidate.appliedDate}</td>
              <td className="p-4">{candidate.resumeType}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default SearchResults;
