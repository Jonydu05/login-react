import Input from '../Inputs/input';

function register() {
  return (
    <section>
      <h2>Cadastrar</h2>

      <form>
        <Input placeholder='Digite seu nome de usuário' type='text' />

        <Input placeholder='Digite seu endereço de email' type='email' />

        <Input placeholder='Digite sua senha' type='password' icon='visibility' />

        <Input placeholder='Confirme sua senha' type='password' icon='visibility' />

        <input type='submit' value='Entrar' />

        <p>Já tem uma conta? Entre aqui</p>
      </form>
    </section>
  );
}
export default register;
