import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as formik from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createJob } from "../store/reducers/jobSlice";
import { useNavigate } from "react-router-dom";

function FormExample() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    maxSalary: yup.string().required(),
  });
  const companyName = useSelector((state) => state?.user?.companyName);
  const firstName = useSelector((state) => state?.user?.firstName);
  const lastName = useSelector((state) => state?.user?.lastName);
  const emailId = useSelector((state) => state?.user?.emailId);
  const _id = useSelector((state) => state?.user?._id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        const data = {
          title: values.title,
          description: values.description,
          maxSalary: values.maxSalary,
          companyName: companyName,
          recruiterDetails: {
            _id: _id,
            firstName: firstName,
            lastName: lastName,
            emailId: emailId,
          },
        };
        dispatch(createJob(data));
        navigate("/");
      }}
      initialValues={{
        title: "",
        description: "",
        maxSalary: "",
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form
          noValidate
          onSubmit={handleSubmit}
          className="d-flex justify-content-center flex-column align-items-center mt-5"
        >
          <Form.Group as={Col} md="4" controlId="validationFormik01">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
              placeholder="Title"
              isValid={touched.title && !errors.title}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationFormik02">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              name="description"
              value={values.description}
              onChange={handleChange}
              isValid={touched.description && !errors.description}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationFormikmaxSalary"
            className="mb-4"
          >
            <Form.Label>Salary</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="number"
                placeholder="maxSalary"
                aria-describedby="inputGroupPrepend"
                name="maxSalary"
                value={values.maxSalary}
                onChange={handleChange}
                // isInvalid={!!errors.maxSalary}
              />
            </InputGroup>
          </Form.Group>
          <Button type="submit" variant="dark">
            Submit form
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormExample;
