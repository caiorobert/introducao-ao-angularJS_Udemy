angular
  .module('meuModulo')
  .controller('indexController', function ($scope) {
    $scope.titulo = 'Home';
    $scope.alunos = [
      {
        nome: 'Caio',
        email: 'caio.robert@live.com',
        nota1: 90,
        nota2: 95,
        nota3: 100,
      },
      {
        nome: 'Layanne',
        email: 'layanne.santos@outlook.com.br',
        nota1: 99,
        nota2: 98,
        nota3: 100,
      },
      {
        nome: 'Gaby',
        email: 'gaby.souza@live.com',
        nota1: 100,
        nota2: 97,
        nota3: 89,
      },
      {
        nome: 'Davi',
        email: 'davi.souza@live.com',
        nota1: 98,
        nota2: 100,
        nota3: 95,
      },
      {
        nome: 'Giovanni',
        email: 'giovanni.souza@live.com',
        nota1: 100,
        nota2: 100,
        nota3: 100,
      },
    ];

    var init = function () {
      $scope.alunos.forEach(function (aluno) {
        // criando no objeto aluno, o atributo media
        aluno.media = media(aluno);
        limpaForm();
      });
    };

    var contar2 = 0;
    //da forma abaixo, a função é local, pertence somente ao JS
    var media = function (Aluno) {
      console.log(contar2++);
      var media =
        (parseFloat(Aluno.nota1) +
          parseFloat(Aluno.nota2) +
          parseFloat(Aluno.nota3)) /
        3;
      return media.toFixed(2);
    };

    // da forma abaixo, a função média ficava acessível no HTML por conta do $scope
    // $scope.media = function (aluno) {
    //   var media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
    //   return media.toFixed(2);
    // };

    $scope.abreAddAluno = function () {
      $scope.editando = false;
      limpaForm();
      $('#modal1').openModal();
    };

    $scope.addAluno = function (Aluno) {
      Aluno.media = media(Aluno);
      $scope.alunos.push(Aluno);
      $('#modal1').closeModal();
      limpaForm();
    };

    $scope.editando = false;
    var alunoEditar;

    $scope.editarAluno = function (Aluno) {
      $scope.editando = true;
      angular.copy(Aluno, $scope.Aluno);
      $('#modal1').openModal();
      alunoEditar = Aluno;
    };

    $scope.salvarAluno = function (Aluno) {
      alunoEditar.nome = Aluno.nome;
      alunoEditar.email = Aluno.email;
      alunoEditar.nota1 = Aluno.nota1;
      alunoEditar.nota2 = Aluno.nota2;
      alunoEditar.nota3 = Aluno.nota3;
      alunoEditar.media = media(Aluno);
      $('#modal1').closeModal();
    };

    $scope.deletarAluno = function (Aluno) {
      for (var index in $scope.alunos) {
        var aux = $scope.alunos[index];
        if (Aluno === aux) {
          $scope.alunos.splice(index, 1);
        }
      }
    };

    var limpaForm = function () {
      $scope.Aluno = {
        nome: '',
        email: '',
        nota1: '',
        nota2: '',
        nota3: '',
        media: '',
      };
    };

    init();
  })
  .controller('contatoController', function ($scope) {
    $scope.titulo = 'Contato';
  });
