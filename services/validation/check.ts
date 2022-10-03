export const composeValidators = (...validators: any[]) => (value: string) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export function isRequired(value: string): string | undefined {
    return value ? undefined : 'Required';
  }
  
export function isValidEmail(value: string): boolean{
  return /\S+@\S+\.\S+/.test(value);
}

export function isBasicPassword(value: string): any[] {
  let strength:any = true;
  if(value?.length>7){
    strength = "weak"
  }
  if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{3,15}$/.test(value)){
    strength = "medium"
  }
  if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(value) && value?.length>7){
    strength = false
  }
  return strength;
}

export function isStrongPassword(value: string): string | undefined {
 return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(value)? undefined : 'medium password';
}