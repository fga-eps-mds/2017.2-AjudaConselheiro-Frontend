// User atributes -> id missing
export class User {
  full_name: string;
  email: string;
  phone: number;
  county: string;
  cpf: number;
  isPresident: boolean;
  password: string;
  id: number;

  attributeNames: string[] = ['full_name', 'email', 'password', 'phone', 'county', 'cpf', 'isPresident'];
}

