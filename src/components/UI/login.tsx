import Input from '../Inputs/input';

function login() {
  return (
    <section className='login'>
      <h2>Login</h2>

      <form>
        <Input placeholder='Digite seu endereço de email' type='email' />

        <Input placeholder='Digite sua senha' type='password' icon='visibility' />

        <p className='login__new-password'>Esqueceu a senha?</p>

        <input type='submit' value='Entrar' className='button' />

        <p className='login__to-register'>Não tem conta? Crie uma aqui</p>
      </form>
    </section>
  );
}

export default login;
