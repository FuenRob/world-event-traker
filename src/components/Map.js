import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ eventData, center, zoom }) => {

    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev => {
        if (ev.categories[0].id === 8) {
            return <LocationMarker 
                type="fire"
                lat={ ev.geometries[0].coordinates[1] } 
                lng={ ev.geometries[0].coordinates[0] } 
                onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
            />
        } else if (ev.categories[0].id === 10) {
            return <LocationMarker 
                type="storm"
                lat={ ev.geometries[ev.geometries.length - 1].coordinates[1] } 
                lng={ ev.geometries[ev.geometries.length - 1].coordinates[0] } 
                onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
            />
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCMgGAY0MaBzjQ1ieByaPz5XC34g-X2Yqo' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 40.0292,
        lng: -3.6180
    },
    zoom: 3
}

export default Map