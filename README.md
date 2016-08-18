# Dynamic State Dropdown
It's usually the details that sets websites apart. [Solodev](https://www.solodev.com/) shows how to add a dynamic state dropdown to your forms using [selectize.js](http://selectize.github.io/selectize.js/) so that your users can quickly find their dropdown selection.

## Tutorial

For detailed instructions, view Solodev's [Creating a Dynamic State Dropdown](https://www.solodev.com/blog/web-design/creating-a-dynamic-state-dropdown.stml) article.

## Demo

Check out a working example on [JSFiddle](https://jsfiddle.net/solodev/3pfs4oko/).

## HTML

You can create a simple dropdown using regular HTML:
```
<label for="select-beast">State:</label>
<select id="select-state" placeholder="Pick a state...">
	<option value="">Select a state...</option>
	<option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
</select>
```

## CSS

The principle styles are controlled by the following stylesheets:
```
<link rel="stylesheet" type="text/css" href="assets/normalize.css">
<link rel="stylesheet" type="text/css" href="assets/selectize.default.css">
<link rel="stylesheet" type="text/css" href="dynamic-state-dropdown.css">
```

## JavaScript

To initiate selectize.js, use the following JavaScript:
```
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
```

Additionally call these resourcs:
```
<script type="text/javascript" src="assets/selectize.js"></script>
<script type="text/javascript" src="assets/index.js"></script>
<script type="text/javascript" src="dynamic-state-dropdown.js"></script>
```

## External Includes

The form includes the following third-party resources:
```
<script type="text/javascript" src="https://www.solodev.com/assets/selectize/js/jquery.js"></script>  
<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>     
<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">  
```
