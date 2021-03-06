'use strict';

// Groups controller
angular.module('groups').controller('GroupsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Groups', 'UserManagers',
	function($scope, $stateParams, $location, Authentication, Groups, UserManagers) {
		$scope.authentication = Authentication;

		// Model to JSON for demo purpose
	    $scope.$watch('models', function(model) {
	        $scope.modelAsJson = angular.toJson(model, true);
	    }, true);

		$scope.go = function (path) {
			$location.path(path);
		};

		// Create new Group
		$scope.create = function() {
			// Create new Group object
			var group = new Groups ({
				name: this.name,
				description: this.description
			});

			// Redirect after save
			group.$save(function(response) {
				$location.path('groups/' + response.id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Group
		$scope.remove = function(group) {
			if ( group ) { 
				group.$remove();

				for (var i in $scope.groups) {
					if ($scope.groups [i] === group) {
						$scope.groups.splice(i, 1);
					}
				}
			} else {
				$scope.group.$remove(function() {
					$location.path('groups');
				});
			}
		};

		// Update existing Group
		$scope.update = function() {
			var group = $scope.group;

			group.$update(function() {
				$location.path('groups/' + group.id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Groups
		$scope.find = function() {
			$scope.groups = Groups.query();
		};

		$scope.getListStaff = function() { 
			$scope.staffs = UserManagers.query();
		}

		// Find existing Group
		$scope.findOne = function() {
			$scope.group = Groups.get({ 
				groupId: $stateParams.groupId
			});
		};
	}
]);