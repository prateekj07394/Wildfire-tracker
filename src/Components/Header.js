const { default: FireIcon } = require("./FireIcon")

const Header = () => {
    return (
        <div className="header">
            <FireIcon/> <div className="brand">Wildfire-tracker</div>
        </div>
    )
}

export default Header;