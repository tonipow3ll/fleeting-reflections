import React from 'react';
import { Columns, Heading, Hero } from 'react-bulma-components'
import 'bulma/css/bulma.css'

function Header() {
return (

<Hero>
<header className="screamcontainer">

  <Heading size={2}>Fleeting Reflections</Heading>
  <Heading  size={3}>Share your thoughts with the ether, nothing here gets saved!</Heading>

</header>
</Hero>
)
}

export default Header;