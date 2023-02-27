import { SubmitHandler, useForm } from "react-hook-form";
import { Form, Button } from "reactstrap";
import { DynamicInput } from "./components/DynamicInput";
import { FormInput } from "./components/Input";
import { FormSelect } from "./components/Select";

interface UserReg {
  email: string;
  name: string;
  selected: [];
  companyShares: [];
}

export default function App() {
  const { control, handleSubmit, register, formState } = useForm<UserReg>({
    mode: "onChange",
    defaultValues: {
      email: "",
      name: "",
      selected: undefined,
      companyShares: undefined,
    },
  });
  const onSubmit: SubmitHandler<UserReg> = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
      <FormSelect
        name="selected"
        control={control}
        isMulti={true}
        options={[
          { label: "Banana", value: "banana", color: "yellow" },
          { label: "Chocolate", value: "chocolate" },
          { label: "Guava", value: "guava" },
        ]}
      />
      <DynamicInput
        name="companyShares"
        register={register}
        control={control as any}
      />
      <pre>{JSON.stringify(formState.errors, null, 2)}</pre>
      <Button>Submit</Button>
    </Form>
  );
}
