import { Help } from '../shared/ui/FormItem/FormItem';

export type ValidateStatus = 'error' | '';

export const getValidateStatus = (errors: unknown, touched: unknown, submitCount: number): ValidateStatus =>
  submitCount && errors && touched ? 'error' : '';

export const getHelp = (errors: unknown, touched: unknown, submitCount: number): Help =>
  submitCount && errors && touched ? (errors as Help) : null;

export const getValidates = (
  errors: unknown,
  touched: unknown,
  submitCount: number
): { validateStatus: ValidateStatus; help: Help } => ({
  validateStatus: getValidateStatus(errors, touched, submitCount),
  help: getHelp(errors, touched, submitCount),
});

export const isNotDefinedString = (string?: string): boolean => !string?.trim();

export const isNotValidEmail = (string?: string): boolean => {
  const regexp = new RegExp(
    //eslint-disable-next-line
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return regexp.test(string);
};
