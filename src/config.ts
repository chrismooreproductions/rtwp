export interface ButtonListProp {
  id: number;
  role: string;
  icon: string;
}

export const buttonDefinition: ButtonListProp[] = [
  { id: 0, role: 'Transmission', icon: 'hardware-sub-system' },
  { id: 1, role: 'Transfer Box', icon: 'hardware-sub-system' },
  { id: 2, role: 'Propshafts', icon: 'hardware-sub-system' },
  { id: 3, role: 'Rear Drive Unit', icon: 'hardware-sub-system' },
  { id: 4, role: 'Front Drive Unit', icon: 'hardware-sub-system' }
];
