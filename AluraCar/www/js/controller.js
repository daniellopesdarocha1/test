angular.module('starter')
.controller('ListagemController', function($scope, CarroService){

	CarroService.obterCarros().then(function(dados){

		$scope.listaDeCarros = dados;

	});
/*
	$scope.listaDeCarros = [{"nome" : 'BMW i20', "preco" : 70000},
							{"nome" : 'Vectra', "preco" : 30000},
							{"nome" : 'Porche', "preco" : 80000},
							{"nome" : 'Ferrari', "preco" : 1000000},
							{"nome" : 'Subaru', "preco" : 200000},
							{"nome" : 'Uno', "preco" : 10000},
							{"nome" : 'Gol', "preco" : 20000},
							{"nome" : 'Fusca', "preco" : 2000},
							{"nome" : 'C3', "preco" : 35000}];
*/
	$scope.rodape = "Rua Vergueiro, 3185";
	
});

angular.module('starter')
.controller('CarroEscolhidoController', function($stateParams, $scope){

	$scope.carroEscolhido = angular.fromJson($stateParams.carro);

	$scope.listaDeAcessorios = [{"nome" : "Freio ABS","preco" : 800},
								{"nome" : "Ar condicionado", "preco" : 1000},
								{"nome" : "MP3", "preco" : 500}];

	$scope.mudou = function(acessorio, isMarcado){
		if (isMarcado) {
			$scope.carroEscolhido.preco = $scope.carroEscolhido.preco + acessorio.preco;
		} else {
			$scope.carroEscolhido.preco = $scope.carroEscolhido.preco - acessorio.preco;
		}
	};

});

angular.module('starter')
.controller('FinalizarPedidoController', function($stateParams, $scope, $ionicPopup, $state){

	$scope.carroFinalizado = angular.fromJson($stateParams.carro);

	$scope.finalizarPedido = function (){
		$ionicPopup.alert({
			title : 'Parabéns',
			template : 'Você acaba de comprar um carro.'
		}).then(function(){
			$state.go('listagem');
		});
	};

});
