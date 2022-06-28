// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const Box = ({
  styles,
  name,
  size}) => {
  let className = size === 'large' 
    ? 'box box--large' 
    : size === 'medium' ? 'box box--medium' : 'box box--small';
  return (
    <div className={className} style={styles}>
      {name}
    </div>
  )
};

function App() {
  return (
    <div>
      <Box size="small" styles={{backgroundColor: 'lightblue'}} name="small lightblue box" />
      <Box size="medium"  styles={{backgroundColor: 'pink'}} name="medium pink box" />
      <Box size="large"  styles={{backgroundColor: 'orange'}} name="large orange box" />
    </div>
  )
}

export default App
