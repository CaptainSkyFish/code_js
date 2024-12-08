import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export default function Background() {
    const location = useLocation()
    const [showBackground, setShowBackground] = useState(true)
  
    useEffect(() => {
      // Specify paths where the background should be hidden
      const hiddenBackgroundRoutes = ["/signup", "/signin"]
      setShowBackground(!hiddenBackgroundRoutes.includes(location.pathname))
    }, [location])
  
    if (!showBackground) return null // Hide background for specified routes
  
    return (
      <div className="top-bg">
        <div className="background">
          <div className="circle one"></div>
          <div className="circle two"></div>
  
          {/* Grainy overlay */}
          <svg className="grain">
            <defs>
              <filter id="grainy">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.8"
                  numOctaves="3"
                  stitchTiles="stitch"
                />
                <feColorMatrix type="saturate" values="0" />
              </filter>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="transparent"
              filter="url(#grainy)"
            />
          </svg>
        </div>
      </div>
    )
  }