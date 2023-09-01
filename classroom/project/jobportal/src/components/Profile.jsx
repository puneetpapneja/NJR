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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    emailId: yup.string().required(),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        const data = {
          id: id,
          fields: {
            firstName: values.firstName,
            lastName: values.lastName,
            emailId: values.emailId,
          },
        };
        dispatch(updateProfile(data));
        console.log("sent", data);
        if (!err) {
          navigate("/");
        }
      }}
      initialValues={{
        firstName: "Mark",
        lastName: "Otto",
        emailId: "",
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form
          noValidate
          onSubmit={handleSubmit}
          className="d-flex justify-content-center flex-column align-items-center"
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
              required
              name="file"
              onChange={handleChange}
              isInvalid={!!errors.file}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.file}
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}
