window.onload=function(){
	var xhr;
	var select_state, $select_state;
	var select_city, $select_city;

	$select_state = $('#select-state').selectize({
		onChange: function(value) {
			if (!value.length) return;
			select_city.disable();
			select_city.clearOptions();
			select_city.load(function(callback) {
				xhr && xhr.abort();
				xhr = $.ajax({
					url: 'http://www.corsproxy.com/api.sba.gov/geodata/primary_city_links_for_state_of/' + value + '.json',
					success: function(results) {
						select_city.enable();
						callback(results);
					},
					error: function() {
						callback();
					}
				})
			});
		}
	});
}