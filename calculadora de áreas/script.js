
        function mostrarCampos() {
            var formaSelecionada = document.getElementById("forma").value;

            document.getElementById("camposCirculo").style.display = (formaSelecionada === "circulo") ? "block" : "none";
            document.getElementById("camposQuadrado").style.display = (formaSelecionada === "quadrado") ? "block" : "none";
            document.getElementById("camposTriangulo").style.display = (formaSelecionada === "triangulo") ? "block" : "none";
        }

        function calcularArea() {
            var formaSelecionada = document.getElementById("forma").value;
            var resultadoElement = document.getElementById("resultado");

            var area;

            switch (formaSelecionada) {
                case "circulo":
                    var raio = parseFloat(document.getElementById("raio").value);
                    area = Math.PI * Math.pow(raio, 2);
                    break;

                case "quadrado":
                    var lado = parseFloat(document.getElementById("lado").value);
                    area = Math.pow(lado, 2);
                    break;

                case "triangulo":
                    var base = parseFloat(document.getElementById("base").value);
                    var altura = parseFloat(document.getElementById("altura").value);
                    area = (base * altura) / 2;
                    break;

                default:
                    resultadoElement.innerHTML = "Selecione uma forma válida.";
                    return;
            }

            resultadoElement.innerHTML = "A área da forma selecionada é: " + area.toFixed(2);
        }

