import './wheel.css';

export default function Wheel() {
    return (
        <>
            <div className="directions">
                Click to spin the wheel to see what prize you won!
            </div>
            <div className="spin-the-wheel">
                <label>
                    <input type="radio" />
                    <div className="clicker"></div>
                    <div className="wheel">
                        <div className="option o1">
                            A sword!
                        </div>
                        <div className="option o2">
                            A shield!
                        </div>
                        <div className="option o3">
                            A spell!
                        </div>
                        <div className="option o4">
                            A FUCKING GUN!
                        </div>
                    </div>
                </label>
            </div>

        </>
    )
}