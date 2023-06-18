import React from 'react'
import { MapContainer, TileLayer, ScaleControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
export default function MapBase(){

  return(
    <div style={{ display:'flex', height:'60vh', width:'80vh', border: '2px solid black', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <MapContainer center={[35.07796209565608, -79.03403208754044]} zoom={13} style={{ height: "100%", width: "100%" }}> 
          <TileLayer
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <ScaleControl position="bottomleft" maxWidth={100} metric imperial />
      </MapContainer>
    </div>
  )}


