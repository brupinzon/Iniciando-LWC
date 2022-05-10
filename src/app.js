import { LightningElement } from "lwc";

export default class App extends LightningElement {
//Criar variáveis, atributos.

Nome = 'Bruna Pinzon';
Telefone = '89766655444';
CPF = '999999999999';
Idade = 26;
Email = 'mailto:bruna.pinzon@outlook.com';
Instagram = 'https://www.instagram.com/bru_pinzon/';
Linkedin = 'https://www.linkedin.com/in/bruna-pinzon/';

visible = true;

trocarDiv(){
  //this.visible = false;
  if(this.visible == false){
    this.visible = true;
  }else{
    this.visible = false;
    }
  }

  alterarValores(){
    if(this.Nome == 'Bruna Pinzon'){
      this.Nome = 'Alexandra Schinoff';
    }if(this.Telefone == '89766655444'){
      this.Telefone = '55555555555';
    }if(this.CPF == '999999999999'){
      this.CPF = '888888888888';
    }if(this.Idade == 26){
      this.Idade = 19;
    }if(this.Email == 'mailto:bruna.pinzon@outlook.com')
      this.Email = 'mailto:bruniipinzon@hotmail.com';
  }
}
 