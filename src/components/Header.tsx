import FontFamilySwitcher from "./FontFamilySwitcher"
import ColorThemeSwitcher from "./ColorThemeSwitcher"

export default function Header() {
   return (
      <header>
         <div>
            <span>
               D
            </span>
         </div>
         <FontFamilySwitcher />
         <ColorThemeSwitcher />
      </header>
   )
}