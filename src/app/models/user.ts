export class User {
  constructor(
    public id?: number,
    public full_name?: string,
    public email?: string,
    public phone?: string,
    public county?: string,
    public cpf?: number,
    public isPresident?: boolean,
    public password?: string) {}
}
