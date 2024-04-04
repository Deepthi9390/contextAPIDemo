import React from 'react'
import Component2 from './Component2'

const Component1 = () => {
  return (
		<div style={{ width: "200px", height: "200px", border: "1px solid red",background:"pink" }}>
			<Component2 />
            <p>hello</p>
		</div>
	)
}

export default Component1