$(document).ready(function (){

    $('button').on('click', function() {
        //function only continues if a zip code has an entry
        if($('#zip').val() != '' && $('#zip').val() != null) {
            //sets zip code
            $zip = $('#zip').val();
            //my API
            var request = axios.get('http://api.openweathermap.org/data/2.5/weather?zip=' + $zip + ',us&appid=2b4e1d4a354078510748332a43842290');
            request.then(function(response){

                $('#loc').html($zip);

                //condition
                $('#cond').html(response.data.weather[0]['main']);

                //sky
                $('#sk').html(response.data.weather[0]['description']);

                //temperature now
                $('#t-n').html(((response.data.main['temp']-273.15) * (9/5) + 32).toFixed(2) + ' °F');

                //high temperature
                $('#t-h').html(((response.data.main['temp_max']-273.15) * (9/5) + 32).toFixed(2) + ' °F');

                //low temperature
                $('#t-l').html(((response.data.main['temp_min']-273.15) * (9/5) + 32).toFixed(2) + ' °F');

                //wind
                $('#w').html(response.data.wind['speed'] + ' mph @ ' + response.data.wind['deg'] + '°');
            })
            //try to catch zip code error
            .catch(function (error){
                console.log('Error: Invalid Zip Code!');
                $('body').prepend('<div class="alert alert-danger rounded-0 text-center" role="alert">Error: Zip Code Not Found!</div>');
            });
        };
    });
    //clear form
    $('#res').on('click', function(){

        //clear wether each time
        $('#location').html('');
        $('#condition').html('');
        $('#wind').html('');
        $('#sky').html('');
        $('#temp-now').html('');
        $('#temp-low').html('');               
        $('#temp-high').html('');   
    });
});