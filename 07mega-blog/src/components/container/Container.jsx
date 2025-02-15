import React from 'react'


//container property accept karta hai as a children (children kevel ek naming convention hai , can be use different )
// contianer is simple box  containing different elements like header , footer etc


function container({children}) {

  return <div className='w-full w-max-7xl mx-auto px-4'> {children}    
    </div>;
 
}

export default container
