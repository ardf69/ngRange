angular.module('ngRange', [])
.directive('ngRange', function() {
	return {
		replace: true,
		restrict: 'E',
		require: 'ngModel',
		template: '<input type="range"></input>',
		link: function(scope, element, attrs, ngModel) {
			var ngRangeMin  = null;
			var ngRangeMax  = null;
			var ngRangeStep = null;
			var value       = null;
			var wreg = {
				min: null,
				max: null,
				step: null,
				model: null,
			};

            element.on('$destroy', function() {
            	if (wreg.min) {
            		wreg.min();
            	}
            	if (wreg.max) {
            		wreg.max();
            	}
            	if (wreg.step) {
            		wreg.step();
            	}
            	if (wreg.model) {
            		wreg.model();
            	}
            });

            if (!angular.isDefined(attrs.ngRangeMin)) {
				ngRangeMin = 0;
			} else {
				wreg.min = scope.$watch(attrs.ngRangeMin, function(newValue, oldValue, scope) {
					if (angular.isDefined(newValue)) {
						ngRangeMin = newValue;
						setValue();
					}
				});
			}
			if (!angular.isDefined(attrs.ngRangeMax)) {
				ngRangeMax = 100;
			} else {
				wreg.max = scope.$watch(attrs.ngRangeMax, function(newValue, oldValue, scope) {
					if (angular.isDefined(newValue)) {
						ngRangeMax = newValue;
						setValue();
					}
				});
			}
			if (!angular.isDefined(attrs.ngRangeStep)) {
				ngRangeStep = 1;
			} else {
				wreg.step = scope.$watch(attrs.ngRangeStep, function(newValue, oldValue, scope) {
					if (angular.isDefined(newValue)) {
						ngRangeStep = newValue;
						setValue();
					}
				});
			}
			if (!angular.isDefined(ngModel)) {
				value = 50;
			} else {
				wreg.model = scope.$watch(
					function () {
						return ngModel.$modelValue;
					}, 
					function(newValue, oldValue, scope) {
						if (angular.isDefined(newValue)) {
							value = newValue;
							setValue();
						}
					}
				);
			}

			function setValue() {
				if (
					ngRangeMin != null &&
					ngRangeMax != null &&
					ngRangeStep != null &&
					value != null
				) {
					element.attr("min", ngRangeMin);
					element.attr("max", ngRangeMax);
					element.attr("step", ngRangeStep);
					element.val(value); 
				}
			}
			
			function read() {
				if (angular.isDefined(attrs.ngModel)) {
					ngModel.$setViewValue(value);
				}
			}

			element.on('change', function() {
				if (value != null && (value != element.val())) {
					value = element.val();
					scope.$apply(read);
				}
			});
		}
	};
});
