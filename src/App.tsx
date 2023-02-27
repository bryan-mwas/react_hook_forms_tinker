import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { Form, Button, Col, Input, Row } from "reactstrap";
import { DynamicInput } from "./components/DynamicInput";
import { FormInput } from "./components/Input";
import { FormSelect } from "./components/Select";

interface UserReg {
  email: string;
  name: string;
  companyShares: { company: string; share: number }[];
}

export default function App() {
  const { control, handleSubmit, register, formState } = useForm<UserReg>({
    mode: "onChange",
    defaultValues: {
      email: "",
      name: "",
      companyShares: [{ company: "Makita", share: 0 }],
    },
  });
  const { fields, append } = useFieldArray({
    name: "companyShares",
    control,
  });
  const onSubmit: SubmitHandler<UserReg> = (data) =>
    console.log(data.companyShares);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <FormInput
        label="Name"
        name={"name"}
        control={control}
        rules={{
          required: "Name is required",
          maxLength: {
            value: 9,
            message: "Name requires at least 9 characters",
          },
        }}
      />
      <FormInput
        label="E-mail"
        name={"email"}
        control={control}
        type={"email"}
      />
      <Button
        onClick={() =>
          append({
            company: "",
            share: 0,
          })
        }
      >
        Add
      </Button>
      {fields.map((field, index) => {
        return (
          <Row key={field.id}>
            <Col className="g-3">
              <FormInput
                control={control}
                type="select"
                name={`companyShares.${index}.company` as const}
                label={"Company"}
              >
                <option>Bosch</option>
                <option>Makita</option>
                <option>Ryobi</option>
                <option>Ingco</option>
              </FormInput>
            </Col>
            <Col className="g-3">
              <FormInput
                control={control}
                type="number"
                name={`companyShares.${index}.share` as const}
                label={"Company Share"}
                rules={{
                  required: true,
                }}
                defaultValue={field.share}
              />
            </Col>
          </Row>
        );
      })}
      <pre>{JSON.stringify(formState.touchedFields, null, 2)}</pre>
      <Button>Submit</Button>
    </Form>
  );
}
