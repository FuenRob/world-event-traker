import { Icon } from '@iconify/react'
import locationFireIcon from '@iconify/icons-mdi/fire-alert'
import locationStormsIcon from '@iconify/icons-mdi/weather-lightning-rainy'

const LocationMarker = ({ type, lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={ onClick }>
            <Icon icon={ type === 'fire' ? locationFireIcon  :  locationStormsIcon} className={`location-icon ${type}`} />
        </div>
    )
}

export default LocationMarker