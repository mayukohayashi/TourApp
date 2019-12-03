/* eslint-disable */

export const displayMap = (locations) => {

    mapboxgl.accessToken =
  'pk.eyJ1IjoiZ29ibyIsImEiOiJjazNndmlreTYwNW04M2htdGRva3J4MzdqIn0.UTjCsJRzneSEyTs0J86NoQ ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/gobo/ck3gvmp5l0eqc1ct88fn56tr1',
    scrollZoom: false
    // canter: [122.4194,37.7749],
    // zoom: 6,
    // interactive: fail
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add Marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
}

