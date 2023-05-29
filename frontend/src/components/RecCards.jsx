import React from 'react'

function RecCards({recensioner}) {
  return (
    <>
        <h1>Glassar</h1>
            <div className="glassar">
            {recensioner.map((recensioner)=>(
            <div key={recensioner.id} className="glass">
                <h3>{recensioner.namn}</h3>
                <p>Smakar {recensioner.betyg}</p>
                <p>Laktos: {recensioner.rec}</p>
                <p>Nötter: {recensioner.glass_id}</p>
            </div>
            ))}
        </div>
    </>
  )
}

export default RecCards
