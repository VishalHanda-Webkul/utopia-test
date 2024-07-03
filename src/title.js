import { Link } from '@remix-run/react'
export var Title = (props) => {
  return (
    <div
      style={{
        width: '100%',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '44px 0px 25px',
        gap: '26px',
        ...props.style,
      }}
    />
  )
}
