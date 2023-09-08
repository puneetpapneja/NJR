import { Form, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../store/reducers/userSlice";
import InputGroup from "react-bootstrap/InputGroup";
import * as formik from "formik";
import * as yup from "yup";

export default function Profile() {
  const { Formik } = formik;
  const id = useSelector((state) => state?.user?._id);
  const err = useSelector((state) => state?.user?.Error);
  const email = useSelector((state) => state?.user?.emailId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    emailId: yup.string().required(),
    fileCV: yup.mixed().required(),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
        const data = new FormData(); // Use FormData to send files
        data.append("id", id);
        data.append("firstName", values.firstName);
        data.append("lastName", values.lastName);
        data.append("emailId", values.emailId);
        // data.append("fileCV", values.fileCV[0]);
        console.log(data);
        if (!err) {
          navigate("/");
        }
      }}
      initialValues={{
        firstName: "Mark",
        lastName: "Otto",
        emailId: email,
        fileCV: null,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        setFieldValue,
        values,
        touched,
        errors,
      }) => (
        <Form
          noValidate
          onSubmit={handleSubmit}
          className="d-flex justify-content-center flex-column align-items-center"
          encType="multipart/form-data"
        >
          <Form.Group as={Col} md="6" controlId="validationFormik01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              isValid={touched.firstName && !errors.firstName}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationFormik02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              isValid={touched.lastName && !errors.lastName}
            />

            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationFormikEmail">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                name="emailId"
                value={values.emailId}
                onChange={handleChange}
                isInvalid={!!errors.emailId}
              />
              <Form.Control.Feedback type="invalid">
                {errors.emailId}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control
              type="file"
              name="fileCV"
              onChange={(event) => {
                setFieldValue("fileCV", event.currentTarget.files[0]);
              }}
              isInvalid={!!errors.fileCV}
            />
          </Form.Group>
          <Button type="submit" variant="dark">
            Submit form
          </Button>
        </Form>
      )}
    </Formik>
  );
}
