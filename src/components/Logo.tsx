import React from 'react'

interface LogoProps {
  size: string,
  thickness: number,
  colour: string
}

export const Logo = (props : LogoProps) => {
  return (
    <svg
      width={props.size ? props.size : '1em'}
      height={props.size ? props.size : '1em'}
      viewBox="0 0 300 300"
      {...props}
    >
      <path
        d="M13.976 279.315c87.255-144.359 55.104-255.7 52.03-254.223-36.842 186.977 115.979 293.81 94.61 10.288-4.414-58.563 25.497 272.719-62.956 236.92"
        fill="none"
        stroke={props.colour ? props.colour : '#000'}
        strokeWidth={props.thickness || 3}
      />
      <path
        d="M122.4 28.965c41.802-.027 123.688.616 159.48-5.422M170 128.243l88.211 6.46M158.66 230.296c34.23 19.484 78.39 19.105 120.196 23.435"
        fill="none"
        stroke={props.colour ? props.colour : '#000'}
        strokeWidth={props.thickness || 3}
      />
    </svg>
  )
}
