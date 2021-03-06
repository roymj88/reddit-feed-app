(function() {
    angular.module('redditapp', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'feed']);

    angular.module('redditapp').config(function($stateProvider, $urlRouterProvider) {

        /* Add New States Above */
        $urlRouterProvider.otherwise('/home');

    });

    angular.module('redditapp').run(function($rootScope) {

        $rootScope.safeApply = function(fn) {
            var phase = $rootScope.$$phase;
            if (phase === '$apply' || phase === '$digest') {
                if (fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };

    });
})();
