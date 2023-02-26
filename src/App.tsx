import { SubmitHandler, useForm } from "react-hook-form";
import { Form, Button } from "reactstrap";
import { FormInput } from "./components/Input";

interface UserReg {
  email: string;
  name: string;
}

export default function App() {
  const { control, handleSubmit, watch, formState } = useForm<UserReg>({
    mode: "onChange",
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
      <pre>{JSON.stringify(formState.errors, null, 2)}</pre>
      <Button>Submit</Button>
    </Form>
  );
}
