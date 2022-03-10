// Validation (re-usable)
// ? = optional value
export interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

/**
 *
 * @param validatableInput
 * @returns true or false
 */
// Must follow the rules of the Validatable interface
export function validate(validatableInput: Validatable) {
  let isValid = true;
  // If the input is set to required then true and trim input when the length is greater than 0
  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
  }
  // If the input is not null and the type is a string then true AND length should be greater than minlength
  if (
    validatableInput.minLength != null &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length >= validatableInput.minLength;
  }
  // If the input is not the maxlength and a string then is the length less than maxlength
  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length <= validatableInput.maxLength;
  }

  // If the min input value is not null in and the value is a number then isValid (true) AND value is greater or equal to the min value
  if (
    validatableInput.min != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }

  // If the max input value is not null in and the value is a number then isValid (true) id AND value is less or equal to the max value
  if (
    validatableInput.max != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value <= validatableInput.max;
  }
  return isValid;
}
