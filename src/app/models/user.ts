// User atributes -> id missing
export class User {
  constructor(
    full_name: string = '',
    email: string = '',
    phone: string = '',
    county: string,
    cpf: number,
    isPresiden: boolean = false,
    password: string,
  ) {}
  id: number;
}
