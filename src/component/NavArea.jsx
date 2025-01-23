import { useState } from "react";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";

function NavArea() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = [
        "About us",
        'Pricing',
        'Customers',
        'Solutions'
    ]
  return (
   <>
   <Navbar className="bg-transparent" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
    
    <NavbarBrand>

        <img src="/Logo.png" alt="" />
        
    </NavbarBrand>
<NavbarContent className="sm:hidden ml-[225px]" justify="end">
    <NavbarMenuToggle className="sm:hidden"  justify='end' aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>

</NavbarContent>
<NavbarContent className="hidden sm:flex gap-4" justify="center">
<NavbarItem>
    {menuItems.map((items)=>(
       <Link key={items}  className="mx-2 text-white hover:text-primary hover:underline transition-transform duration-150 " color="foreground" href="#">
          {items}
          </Link> 
    ))}
          
        </NavbarItem>

</NavbarContent>

<NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex gap-3">
         <Button as={Link} color="primary" className="text-black rounded-full">Book a Demo</Button>
       <Button className="text-white rounded-full" as={Link} color="white" href="#" variant="bordered">
           Contact Us
          </Button> </NavbarItem>
       
      </NavbarContent>

      <NavbarMenu className="bg-transparent">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full "
             
              href="#"
              size="lg"
            >
              {item}
            </Link>
        
       
          </NavbarMenuItem>

  
        ))}

<NavbarMenuItem className="flex flex-col gap-3 w-1/3 ">
   <Button as={Link} color="primary" className="text-black rounded-full">Book a Demo</Button>
       <Button className="text-white rounded-full" as={Link} color="white" href="#" variant="bordered">
           Contact Us
          </Button>
</NavbarMenuItem>

      </NavbarMenu>

   </Navbar>
   </>
  )
}

export default NavArea