import {
  FieldValues,
  UseControllerProps,
  useFieldArray,
  UseFormRegister,
} from "react-hook-form";
import { Button, Col, Input, Row } from "reactstrap";

export function DynamicInput(props: UseControllerProps & { register: any }) {
  const { fields, append, remove } = useFieldArray(props);
  // Use field array to the rescue
  return (
    <>
      {fields.map((field, index) => {
        return (
          <Row key={field.id}>
            <Col>
              <Input
                {...props.register(`${props.name}.${index}.company`)}
                type="select"
              >
                <option>Bosch</option>
                <option>Makita</option>
                <option>Ryobi</option>
                <option>Ingco</option>
              </Input>
            </Col>
            <Col>
              <Input {...props.register(`${props.name}.${index}.share`)} />
            </Col>
            <Button
              onClick={() =>
                append({
                  company: "",
                  share: "",
                })
              }
            >
              Submit
            </Button>
          </Row>
        );
      })}
    </>
  );
}
