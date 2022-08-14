const DarkLayout = ({children}) => {
  return (
    <div style={{
        backgroundColor: 'rgba(255,0,0,0.8)',
        borderRadius: '50px',
        padding: '10px',
    }}>

        <h3>Dark Layout</h3>
        <div>
            {children}
        </div>

    </div>
  )
}

export default DarkLayout