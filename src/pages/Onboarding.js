import React, { useEffect, useState} from "react";
import { connect } from "react-redux";
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Container,
} from "reactstrap";

import {useDispatch, useSelector} from "react-redux"

import {onboardingData} from "../redux/actions/auth";



function Onboarding(props) {

  const [gender, setGender] = useState("")
  const [intensity, setIntensity] = useState("")

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(onboardingData(gender, intensity))
  };

  useEffect(() => {
    console.log(gender)
    console.log(intensity)
  }, [gender, intensity])

  return (
    <Container>
      <Card>
        <CardBody>
          <h2>Oboarding Form</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Gender</Label>
              <FormGroup tag="fieldset">
                <FormGroup check>
                  <Label check>
                    <Input onChange={e => setGender(e.target.value)} type="radio" name="gender" value="male" /> Male
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input onChange={e => setGender(e.target.value)} type="radio" name="gender" value="female" /> Female
                  </Label>
                </FormGroup>
              </FormGroup>
            </FormGroup>

            <FormGroup>
              <Label>Intensity</Label>
              <FormGroup tag="fieldset">
                <FormGroup check>
                  <Label check>
                    <Input onChange={e => setIntensity(e.target.value)} type="radio" name="intensity" value="1" /> 1
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input onChange={e => setIntensity(e.target.value)} type="radio" name="intensity" value="2"/> 2
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input onChange={e => setIntensity(e.target.value)} type="radio" name="intensity" value="3"/> 3
                  </Label>
                </FormGroup>
              </FormGroup>
            </FormGroup>

            <Button>Submit</Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Onboarding;
