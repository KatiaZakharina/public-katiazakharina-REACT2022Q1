import { Checkbox } from './Checkbox/Checkbox';
import { Select } from './Select/Select';
import { ToggleSwitch } from './Switch/Switch';

export const customInputs = { switch: ToggleSwitch, select: Select, checkbox: Checkbox };
export type CustomInputs = keyof typeof customInputs;

export * from './Input/Input';
export * from './StyledButton';
export * from './Checkbox/Checkbox';
export * from './Switch/Switch';
export * from './Select/Select';
