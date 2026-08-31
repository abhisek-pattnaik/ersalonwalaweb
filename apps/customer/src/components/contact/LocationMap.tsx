import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./LocationMap.css";

// Pink location marker
const locationIcon = L.divIcon({
  className: "custom-location-icon",
  html: `
    <div class="location-pin">
      <div class="pin-circle"></div>
      <div class="pin-point"></div>
    </div>
  `,
  iconSize: [50, 60],
  iconAnchor: [25, 60],
});

// Buckingham Palace icon
const palaceIcon = L.divIcon({
  className: "palace-marker",
  html: `
    <div class="palace-building">
      <div class="palace-columns">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="palace-roof"></div>
    </div>
  `,
  iconSize: [90, 55],
  iconAnchor: [45, 55],
});

// Underground icon
const tubeIcon = L.divIcon({
  className: "tube-marker",
  html: `
    <div class="tube-circle">
      <span>▰</span>
    </div>
  `,
  iconSize: [28, 28],
  iconAnchor: [14, 14],
});

export default function LocationMap() {
  return (
    <div className="location-map-wrapper">
      <MapContainer
        center={[51.5055, -0.134]}
        zoom={14}
        zoomControl={false}
        scrollWheelZoom={false}
        dragging={false}
        doubleClickZoom={false}
        touchZoom={false}
        attributionControl={false}
        className="location-map"
      >
        {/* Dark map */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {/* Main pink location */}
        <Marker
          position={[51.5058, -0.145]}
          icon={locationIcon}
        >
          <Popup>Your Location</Popup>
        </Marker>

        {/* Buckingham Palace */}
        <Marker
          position={[51.5014, -0.1419]}
          icon={palaceIcon}
        >
          <Popup>Buckingham Palace</Popup>
        </Marker>

        {/* Underground stations */}
        <Marker
          position={[51.5055, -0.149]}
          icon={tubeIcon}
        />

        <Marker
          position={[51.5115, -0.127]}
          icon={tubeIcon}
        />

        <Marker
          position={[51.498, -0.133]}
          icon={tubeIcon}
        />

        <Marker
          position={[51.497, -0.126]}
          icon={tubeIcon}
        />
      </MapContainer>
    </div>
  );
}