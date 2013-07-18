define([],
	function ()
	{
		configOptions = {
			//The appid for the configured application
			appid: "",
			//The web map id
			webmaps: [
			{
				id: "54bdfa6d3913462a8963b21a5f6209fb",
				title: ""
			}],
			//Enter a title, if no title is specified, the webmap's title is used.
			title: "Add a title here",
			//Enter a subtitle, if not specified the ArcGIS.com web map's summary is used
			subtitle: "Add a subtitle here",
			//Sync maps scale and location
			syncMaps: true,
			//Display geocoder search widget
			geocoderWidget: false,
			// Specify a proxy for custom deployment
			proxyurl: "",
			//specify the url to a geometry service
			geometryserviceurl: "/arcgis/rest/services/Utilities/Geometry/GeometryServer",
			//If the webmap uses Bing Maps data, you will need to provided your Bing Maps Key
			bingmapskey : "",
			//Modify this to point to your sharing service URL if you are using the portal
			sharingurl: "/arcgis/sharing/content/items"
		}
	}
);
