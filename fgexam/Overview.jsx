import PropTypes from 'prop-types'

export default function Overview(props) {
    return(
        <div>
            <h2>Product Overview</h2>
            <p>The {props.name} is a high performance mechanical keyboard designed for gamers,
                professionals, and everyday users who demand precision and comfort. It features
                customizable RGB backlighting, durable mechanical switches, and programmable keys
                to enhance your typing and gaming experience.</p>
            
            <h2>Specifications</h2>
            <ul>
                <li><b>Switch Type: </b>Cherry MX Red (Mechanical)</li>
                <li><b>Key Layout: </b>Full-size (104 keys)</li>
                <li><b>Backlighting: </b>RGB with customizable colors</li>
                <li><b>Connectivity: </b>Wired (USB 2.0)</li>
                <li><b>Dimensions: </b>440 mm x 135 mm x 35 mm</li>
                <li><b>Weight: </b>1.2 kg</li>
                <li><b>Cable Length: </b>1.8 meters</li>
                <li><b>Additional Features: </b>Anti-ghosting, N-key rollover, dedicated media controls</li>
            </ul>

            <h2>In the Box:</h2>
            <ul>
                <li>{props.name} Keyboard</li>
                <li>USB Cable</li>
                <li>User Manual</li>
                <li>Keycap Removal Tool</li>
                <li>Warranty Card</li>
            </ul>

            <h2>Key Features:</h2>
            <p><b>Customizable RGB Backlighting:</b>Personalize the keyboard's illumination with a wide
            range of colors and lighting effects.</p>
            <p><b>Mechanical Switches:</b>Cherry MX Red switches for a responsive and smooth typing experience.</p>
            <p><b>Programmable Keys:</b>Assign macros and custom functions to any key with the included software.</p>
            <p><b>Anti-Ghosting & N-Key Rollover:</b>Ensure accurate keypress registration during intense
            gaming sessions.</p>
            <p><b>Dedicated Media Controls:</b>Easily control music and videos with dedicated media keys.</p>
        </div>
    )
}