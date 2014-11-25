(function() {
  var app = angular.module('Illustrations', ['ngGrid']);

  app.controller('StoreController', function(){
    this.products = products;

  });

  app.controller('PageController', function($scope){
    this.page = 1;

    this.setPage = function(newValue){
      this.page = newValue;

      if (newValue === 1){
      	$scope.myData = testSummary;
      	$scope.gridOptions = { 
	    	data: 'myData',
	    	headerRowHeight:0
	    };
	  }

      if (newValue === 2){
      	$scope.myData = testDetailed;
      	$scope.gridOptions = {data: 'myData'};
      }

    };

    this.isSet = function(pageName){
      return this.page === pageName;
    };

  });

// UI Data
  app.controller('SideBarController', function(){
    this.Menus = Menus;

    this.setOption = function(optionValue){
      alert(optionValue);
    };
  });

// Product Data
  var products = [{
      name: 'Protective Life',
      description: "Protective Life Insurance.",
      images: [
        "images/Protective_Logo.png"
      ],
      features: [
        "Yearly Renewable Term(YRT)",
        "Death Benefits 100% Up"
      ]
    }, {
      name: 'Pacific Life',
      description: "Pacific Life Insurance.",
      images: [
        "images/PacificLife_Logo.png"
      ],
      features: [
        "Yearly Renewable Term(YRT)",
        "Coverage 99 Years"
      ]
    }, {
      name: 'American General',
      description: "American General Insurance.",
      images: [
        "images/AmericanGeneral_Logo.png"
      ],
      features: [
        "Guaranteed Level Term",
        "Death Benefits 100% Up"
      ]
      }, {
      name: 'American General',
      description: "American General Insurance.",
      images: [
        "images/Highland_Logo.png"
      ],
      features: [
        "Guaranteed Level Term",
        "Death Benefits 100% Up"
      ]
      }, {
      name: 'American General',
      description: "American General Insurance.",
      images: [
        "images/Lincoln_Logo.png"
      ],
      features: [
        "Guaranteed Level Term",
        "Death Benefits 100% Up"
      ]
      }, {
      name: 'American General',
      description: "American General Insurance.",
      images: [
        "images/ING_Logo.png"
      ],
      features: [
        "Guaranteed Level Term",
        "Death Benefits 100% Up"
      ]

    }];

// Grid Data
	var testSummary = [{DeathBenefit: "$500,000", NonGuarCashValue: "$0", CurrentRate: "3.75%", GuarToAge: 65},
	                 {DeathBenefit: "$500,000", NonGuarCashValue: "$0"},
	                 {DeathBenefit: "$500,000", NonGuarCashValue: "$72,623"},
	                 {DeathBenefit: "$500,000", NonGuarCashValue: "$161,938"},
	                 {DeathBenefit: "$500,000", NonGuarCashValue: "$0"}];

	var testDetailed = [{Yr: 1, Age: 56, Premium: 24678, GuarCashValue: 0, NonGuarCashValue: 0, SurrenderValue: 8946, DeathBenefit: 600000},
						{Yr: 2, Age: 57, Premium: 24678, GuarCashValue: 0, NonGuarCashValue: 0, SurrenderValue: 8946, DeathBenefit: 600000},
						{Yr: 3, Age: 58, Premium: 24678, GuarCashValue: 0, NonGuarCashValue: 0, SurrenderValue: 8946, DeathBenefit: 600000},
						{Yr: 4, Age: 59, Premium: 24678, GuarCashValue: 0, NonGuarCashValue: 0, SurrenderValue: 8946, DeathBenefit: 600000},
						{Yr: 5, Age: 60, Premium: 24678, GuarCashValue: 0, NonGuarCashValue: 0, SurrenderValue: 8946, DeathBenefit: 600000},
						{Yr: 6, Age: 61, Premium: 24678, GuarCashValue: 0, NonGuarCashValue: 0, SurrenderValue: 8946, DeathBenefit: 600000},
						{Yr: 7, Age: 62, Premium: 24678, GuarCashValue: 0, NonGuarCashValue: 0, SurrenderValue: 8946, DeathBenefit: 600000},
						{Yr: 8, Age: 63, Premium: 24678, GuarCashValue: 0, NonGuarCashValue: 0, SurrenderValue: 8946, DeathBenefit: 600000},
						{Yr: 9, Age: 64, Premium: 24678, GuarCashValue: 0, NonGuarCashValue: 0, SurrenderValue: 8946, DeathBenefit: 600000},
						{Yr: 10, Age: 65, Premium: 34678, GuarCashValue: 0, NonGuarCashValue: 0, SurrenderValue: 8946, DeathBenefit: 600000},
						{Yr: 11, Age: 66, Premium: 34678, GuarCashValue: 0, NonGuarCashValue: 0, SurrenderValue: 8946, DeathBenefit: 600000},
						{Yr: 12, Age: 67, Premium: 34678, GuarCashValue: 0, NonGuarCashValue: 0, SurrenderValue: 8946, DeathBenefit: 600000},
						{Yr: 13, Age: 68, Premium: 34678, GuarCashValue: 0, NonGuarCashValue: 0, SurrenderValue: 8946, DeathBenefit: 600000},
						{Yr: 14, Age: 69, Premium: 34678, GuarCashValue: 0, NonGuarCashValue: 0, SurrenderValue: 8946, DeathBenefit: 600000},
						{Yr: 15, Age: 70, Premium: 44678, GuarCashValue: 0, NonGuarCashValue: 0, SurrenderValue: 8946, DeathBenefit: 600000},
						{Yr: 16, Age: 71, Premium: 44678, GuarCashValue: 0, NonGuarCashValue: 0, SurrenderValue: 8946, DeathBenefit: 600000},
						{Yr: 17, Age: 72, Premium: 44678, GuarCashValue: 0, NonGuarCashValue: 0, SurrenderValue: 8946, DeathBenefit: 600000},
						{Yr: 18, Age: 73, Premium: 44678, GuarCashValue: 0, NonGuarCashValue: 0, SurrenderValue: 8946, DeathBenefit: 600000},
						{Yr: 19, Age: 74, Premium: 44678, GuarCashValue: 0, NonGuarCashValue: 0, SurrenderValue: 8946, DeathBenefit: 600000},
						{Yr: 20, Age: 75, Premium: 44678, GuarCashValue: 0, NonGuarCashValue: 0, SurrenderValue: 8946, DeathBenefit: 600000},
						{Yr: 21, Age: 76, Premium: 44678, GuarCashValue: 0, NonGuarCashValue: 0, SurrenderValue: 8946, DeathBenefit: 600000},
						{Yr: 22, Age: 77, Premium: 44678, GuarCashValue: 0, NonGuarCashValue: 0, SurrenderValue: 8946, DeathBenefit: 600000}];

// Menus
	var Menus = [{
      	name: "Age",
      	options: [
	        65,
	        54,
	        55
	    ],
	    order: 1
      }, {
   	  	name: "Death Benefit",
   	  	options: [
	        "$450,000",
	        "$500,000",
	        "$550,000",
	        "$600,000"
        ],
        order: 2
      }, {
      	name: "Death Benefit Option",
      	options: [
	        "Level",
	        "Increasing"
	    ],
	    order: 3
      }, {
      	name: "1st Year Lump Sum",
      	options: [
	        "$0",
	        "$5,000",
	        "$10,000",
	        "$15,000"
	    ],
	    order: 4
      }, {
      	name: "Payment Period",
      	options: [
	        "10 Yr",
	        "20 Yr",
	        "30 Yr",
	        "To Maturity"
	    ],
	    order: 5
      }, {
      	name: "Carrier",
      	options: [
	        "Lincoln Financial",
	        "American General",
	        "ING",
	        "Protective Life"
	    ],
	    order: 6
      }, {
      	name: "Health Class",
      	options: [
	        "Preferred Plus Non-Smoker",
	        "Preferred Non-Smoker",
	        "Standard Non-Smoker"
	    ],
	    order: 7
      }
	];
})();
