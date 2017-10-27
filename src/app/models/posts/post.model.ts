export class Post {
  static testPost: 377;
  static incompletePost: 375;
  static completePost: 376;

  constructor(
    public autor?: string,
    public codPessoa?: number,
    public tipo?: string,
    public codTipoPostagem?: number,
  ) {}
}
