class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      enumerable: true,
      writable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }
  isSequencia() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    if (sequencia === this.cpfLimpo)
      throw new Error("Sequencia nao e um cpf valido");
  }
  CriaDigito(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    //console.log(cpfArray);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
      ac += regressivo * Number(val);
      regressivo--;
      return ac;
    }, 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? "0" : String(digito);
  }

  valida() {
    try {
      if (!this.cpfLimpo || this.cpfLimpo.length !== 11 || this.isSequencia())
        return;
    } catch (e) {
      throw new TypeError("tente novamente,cpf invalido!");
    }
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.CriaDigito(cpfParcial);
    const digito2 = this.CriaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;

    console.log(digito1, digito2);
    console.log(novoCpf);

    return `os cpf sao iguais ?   ${novoCpf === this.cpfLimpo}`;
  }
}
const validaCPF = new ValidaCPF("070.987.720.03");
console.log(validaCPF.valida());
