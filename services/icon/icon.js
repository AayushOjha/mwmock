const Icon = (props) => {
  return (
    <i style={props?.style} className={`${props.name} ${props?.className}`} />
  )
}

export default Icon
