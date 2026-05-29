export interface User {
  id: number;
  name: string;
  email: string;
}

export function add(a: number, b: number): number {
  return a + b;
}

export type status = "active" | "Inactive" | "pending";

export type Profile = {
  address: string;
  city: string;
  state: string;
  gender: string;
};

export const pancard: string | number = "JLFPK5289E";
