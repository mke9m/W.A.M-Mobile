/**
 * Created by mike on 16/08/15.
 */
angular.module('WAM').controller('trafficctl', function($scope,$state , $ionicLoading,wamApi,traffic_service) {




    $scope.show = function () {
        $ionicLoading.show({
            template: 'Loading...'
        });
    };
    $scope.hide = function () {
        $ionicLoading.hide();
    };

    $scope.show();
    //get the events
    wamApi('getRoadWorks', prams).then(function (response) {
        //console.log("getEvents", response)
        if (response.success) {
            // var $data = JSON.parse(response.data);
            console.log("getRoadWorks",response.data)
            $scope.road_events = response.data;
            $scope.hide();
        }

    })



    $scope.gettrafficdetail = function (trafic_info){


        traffic_service.selected_traffic_event = trafic_info;
console.log("I have been called for detail", trafic_info);

        $state.go("traffic_details");
    }


})
