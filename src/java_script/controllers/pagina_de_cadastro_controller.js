class Controller {
  constructor(valorinputemail, valorcep) {
    this.valor_input_email = valorinputemail; //$("#valor_email").val())
    this.valor_input_cep = valorcep;
  }
  validandoEmail() {
    let model = new Model(this.valor_input_email);
    console.log(model.validaEmail());
  }
  cep_preenchido() {
    let modelcep = new Model(this.valor_input_email, this.valor_input_cep);
    modelcep.preencheCep();
    let viewCep = new View();
    viewCep.mostraCep(modelcep);
    console.log(modelcep.getLogradouro());
  }
}
