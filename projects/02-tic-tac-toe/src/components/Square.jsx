export const Square = ({ children, isSelected, updateBoard, index }) => { //? Children es lo que se mostrará en el tablero (X u O)
    const className = `square ${isSelected ? 'is-selected' : ''} `
  
    const handleClick = () => {
      updateBoard(index)
    }
  
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }