import React from 'react'
import { MapContainer, TileLayer, ScaleControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
export default function MapBase(){

  return(
    <div style={{ zIndex: '1', display: 'flex', justifyContent: 'center', paddingTop: '10vh' , height: '100vh', width: '100%'}}>
      <div style={{ display:'flex',zIndex: '2',  height:'60vh', width:'70%', border: '2px solid black'}}>
      <MapContainer center={[35.07796209565608, -79.03403208754044]} zoom={13} style={{ height: "100%", width: "100%" }}> 
          <TileLayer
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <ScaleControl position="bottomleft" maxWidth={100} metric imperial />
      </MapContainer>
    </div>
</div>
  )}


