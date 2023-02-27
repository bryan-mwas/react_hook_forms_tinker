import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import Select, { GroupBase, OptionsOrGroups, Props } from "react-select";

export function FormSelect<T extends FieldValues>(
  props: UseControllerProps<T> & {
    options: OptionsOrGroups<any, GroupBase<any>>;
    isMulti: boolean;
  }
) {
  const {
    field,
    fieldState: { error },
  } = useController(props);
  return <Select {...field} options={props.options} isMulti={props.isMulti} />;
}
