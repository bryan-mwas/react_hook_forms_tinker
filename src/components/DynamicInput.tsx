import {
  FieldValues,
  UseControllerProps,
  useFieldArray,
  UseFormRegister,
} from "react-hook-form";
import { Col, Input, Row } from "reactstrap";

export function DynamicInput(props: UseControllerProps & { register: any }) {
  const { fields } = useFieldArray(props);
  // Use field array to the rescue
  return (
    <>
      {fields.map((field, index) => {
        return (
          <Row>
            <Col>
              <Input {...props.register(`${props.name}.${index}.company`)} />
            </Col>
            <Col>
              <Input {...props.register(`${props.name}.${index}.share`)} />
            </Col>
          </Row>
        );
      })}
    </>
  );
}
