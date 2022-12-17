function saludar(saludarFunction){
  saludarFunction();
}

const saludoInternacional = function(){
  console.log('Hola Mundo');
}

const saludoMexicano = () => {
  console.log('Quihubole! ')
}

saludar(saludoInternacional);
saludar(saludoMexicano);
