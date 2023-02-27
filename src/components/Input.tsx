import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { Input, FormGroup, Label, FormFeedback } from "reactstrap";
import { InputType } from "reactstrap/types/lib/Input";

interface InputParams {
  label: string;
  type?: InputType;
}
export function FormInput<T extends FieldValues>(
  props: UseControllerProps<T> & InputParams
) {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <FormGroup floating>
      <Input
        id={props.name}
        {...field}
        placeholder={props.label}
        type={props?.type || "text"}
        invalid={!!error}
      />
      <Label for={props.name}>{props.label}</Label>
      <FormFeedback>{error?.message}</FormFeedback>
    </FormGroup>
  );
}
